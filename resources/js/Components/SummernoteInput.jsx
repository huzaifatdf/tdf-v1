import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";

// Utility to load external scripts/CSS once
const loadedAssets = new Set();

const loadAsset = (src, type = 'script') => {
  return new Promise((resolve, reject) => {
    if (loadedAssets.has(src)) {
      resolve();
      return;
    }

    const element = type === 'script'
      ? document.createElement('script')
      : document.createElement('link');

    if (type === 'script') {
      element.src = src;
      element.onload = () => {
        loadedAssets.add(src);
        resolve();
      };
      element.onerror = reject;
    } else {
      element.rel = 'stylesheet';
      element.href = src;
      element.onload = () => {
        loadedAssets.add(src);
        resolve();
      };
      element.onerror = reject;
    }

    document.head.appendChild(element);
  });
};

// Simple Rich Text Editor as fallback
const SimpleRichTextEditor = React.memo(({ value, onChange, placeholder, height = 200 }) => {
  const editorRef = useRef(null);
  const [content, setContent] = useState(value || '');

  const handleInput = useCallback((e) => {
    const newContent = e.target.innerHTML;
    setContent(newContent);
    onChange(newContent);
  }, [onChange]);

  const handleKeyDown = useCallback((e) => {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'b':
          e.preventDefault();
          document.execCommand('bold');
          break;
        case 'i':
          e.preventDefault();
          document.execCommand('italic');
          break;
        case 'u':
          e.preventDefault();
          document.execCommand('underline');
          break;
      }
    }
  }, []);

  const execCommand = useCallback((command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  }, []);

  useEffect(() => {
    if (editorRef.current && content !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = content;
    }
  }, [content]);

  return (
    <div className="border rounded-md overflow-hidden">
      <div className="border-b p-2 bg-gray-50 flex gap-1 flex-wrap">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('bold')}
          className="px-2 py-1 text-xs h-8"
          title="Bold (Ctrl+B)"
        >
          <strong>B</strong>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('italic')}
          className="px-2 py-1 text-xs h-8"
          title="Italic (Ctrl+I)"
        >
          <em>I</em>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('underline')}
          className="px-2 py-1 text-xs h-8"
          title="Underline (Ctrl+U)"
        >
          <u>U</u>
        </Button>
        <div className="w-px bg-gray-300 mx-1" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('insertUnorderedList')}
          className="px-2 py-1 text-xs h-8"
          title="Bullet List"
        >
          •
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('insertOrderedList')}
          className="px-2 py-1 text-xs h-8"
          title="Numbered List"
        >
          1.
        </Button>
        <div className="w-px bg-gray-300 mx-1" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('createLink', prompt('Enter URL:'))}
          className="px-2 py-1 text-xs h-8"
          title="Insert Link"
        >
          🔗
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('removeFormat')}
          className="px-2 py-1 text-xs h-8"
          title="Clear Formatting"
        >
          ✕
        </Button>
      </div>
      <div className="relative">
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          className="p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
          style={{
            minHeight: `${height}px`,
            wordBreak: 'break-word',
            lineHeight: '1.5'
          }}
          dangerouslySetInnerHTML={{ __html: content }}
          suppressContentEditableWarning={true}
        />
        {!content && (
          <div
            className="absolute top-3 left-3 pointer-events-none text-gray-400 select-none"
            style={{ lineHeight: '1.5' }}
          >
            {placeholder || 'Enter content...'}
          </div>
        )}
      </div>
    </div>
  );
});

SimpleRichTextEditor.displayName = 'SimpleRichTextEditor';

// Advanced Summernote Editor
const AdvancedSummernoteEditor = React.memo(({ value, onChange, placeholder, height = 200 }) => {
  const editorRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const summernoteInstance = useRef(null);
  const mountedRef = useRef(true);

  // Initialize Summernote only once when isReady becomes true
  useEffect(() => {
    if (!isReady || !editorRef.current || !window.$ || !window.$.fn.summernote) return;

    const $editor = window.$(editorRef.current);

    // Skip if already initialized
    if (summernoteInstance.current) {
      if (value !== $editor.summernote('code')) {
        $editor.summernote('code', value || '');
      }
      return;
    }

    // Initialize Summernote
    $editor.summernote({
      placeholder: placeholder || 'Enter content...',
      tabsize: 2,
      height: height,
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['fontname', ['fontname']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video']],
        ['view', ['fullscreen', 'codeview', 'help']]
      ],
      callbacks: {
        onChange: (content) => {
          if (mountedRef.current) {
            onChange(content);
          }
        }
      }
    });

    summernoteInstance.current = $editor;

    // Set initial value
    if (value) {
      $editor.summernote('code', value);
    }

    return () => {
      if (summernoteInstance.current && summernoteInstance.current.summernote) {
        try {
          summernoteInstance.current.summernote('destroy');
        } catch (e) {
          console.error('Error destroying Summernote:', e);
        }
        summernoteInstance.current = null;
      }
    };
  }, [isReady, height, placeholder]); // Only depend on these values

  // Effect to update content when value prop changes
  useEffect(() => {
    if (summernoteInstance.current && value !== summernoteInstance.current.summernote('code')) {
      summernoteInstance.current.summernote('code', value || '');
    }
  }, [value]);

  // Check for Summernote availability
  useEffect(() => {
    const checkSummernote = () => {
      if (window.$ && window.$.fn.summernote) {
        setIsReady(true);
        return true;
      }
      return false;
    };

    if (!checkSummernote()) {
      const interval = setInterval(() => {
        if (checkSummernote()) {
          clearInterval(interval);
        }
      }, 100);

      return () => {
        clearInterval(interval);
        mountedRef.current = false;
      };
    }
  }, []);

  if (!isReady) {
    return (
      <div className="border rounded-md p-4 bg-gray-50 flex items-center justify-center"
           style={{ height: `${height + 40}px` }}>
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-sm text-gray-600">Loading advanced editor...</span>
      </div>
    );
  }

  return (
    <div className="summernote-wrapper">
      <textarea
        ref={editorRef}
        className="form-control"
        style={{ display: 'none' }}
        defaultValue={value || ''}
      />
    </div>
  );
});

AdvancedSummernoteEditor.displayName = 'AdvancedSummernoteEditor';

// Main SummernoteInput Component
const SummernoteInput = ({
  value = '',
  onChange,
  placeholder = 'Enter content...',
  height = 200,
  className = '',
  disabled = false,
  showToggle = true,
  defaultMode = 'simple' // 'simple' or 'advanced'
}) => {
  const [editorMode, setEditorMode] = useState(defaultMode);
  const [isLoading, setIsLoading] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  // Check if Summernote is already loaded
  useEffect(() => {
    if (window.$ && window.$.fn.summernote) {
      setAssetsLoaded(true);
    }
  }, []);

  const loadSummernoteAssets = useCallback(async () => {
    if (isLoading || assetsLoaded) return;

    setIsLoading(true);
    try {
      // Load jQuery first if not available
      if (!window.jQuery) {
        await loadAsset('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js');
      }

      // Load Summernote CSS and JS
      await Promise.all([
        loadAsset('https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-lite.min.css', 'link'),
        loadAsset('https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-lite.min.js')
      ]);

      setAssetsLoaded(true);
      setEditorMode('advanced');
    } catch (error) {
      console.error('Failed to load Summernote:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, assetsLoaded]);

  const toggleEditor = useCallback(() => {
    if (editorMode === 'simple') {
      if (!assetsLoaded) {
        loadSummernoteAssets();
      } else {
        setEditorMode('advanced');
      }
    } else {
      setEditorMode('simple');
    }
  }, [editorMode, assetsLoaded, loadSummernoteAssets]);

  if (disabled) {
    return (
      <div
        className={`border rounded-md p-3 bg-gray-50 ${className}`}
        style={{ minHeight: `${height}px` }}
        dangerouslySetInnerHTML={{ __html: value || `<span class="text-gray-400">${placeholder}</span>` }}
      />
    );
  }

  return (
    <div className={`summernote-input-wrapper ${className}`}>
      {showToggle && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-500">
            Editor: {editorMode === 'simple' ? 'Simple' : 'Advanced'}
          </span>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={toggleEditor}
            disabled={isLoading}
            className="text-xs h-6 px-2"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-3 w-3 border-b border-current mr-1" />
                Loading...
              </>
            ) : (
              `Switch to ${editorMode === 'simple' ? 'Advanced' : 'Simple'}`
            )}
          </Button>
        </div>
      )}

      {editorMode === 'simple' ? (
        <SimpleRichTextEditor
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          height={height}
        />
      ) : (
        <AdvancedSummernoteEditor
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          height={height}
        />
      )}
    </div>
  );
};

export default SummernoteInput;
