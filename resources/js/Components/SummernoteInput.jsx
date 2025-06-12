
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
  const [isFocused, setIsFocused] = useState(false);

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

    // Handle Enter key in lists
    if (e.key === 'Enter') {
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const container = range.commonAncestorContainer;
        const listItem = container.nodeType === Node.TEXT_NODE
          ? container.parentElement?.closest('li')
          : container.closest?.('li');

        if (listItem) {
          // Let the browser handle list item creation naturally
          return;
        }
      }
    }
  }, []);

  const execCommand = useCallback((command, value = null) => {
    const editor = editorRef.current;
    if (!editor) return;

    // Focus the editor first
    editor.focus();

    // Save current selection
    const selection = window.getSelection();
    let range = null;

    if (selection.rangeCount > 0) {
      range = selection.getRangeAt(0);
    }

    // Special handling for list commands
    if (command === 'insertOrderedList' || command === 'insertUnorderedList') {
      // Check if we're already in a list
      const currentElement = selection.anchorNode?.nodeType === Node.TEXT_NODE
        ? selection.anchorNode.parentElement
        : selection.anchorNode;

      const existingList = currentElement?.closest('ol, ul');
      const listItem = currentElement?.closest('li');

      if (existingList) {
        // If we're in a list, toggle it off or change type
        const isOrderedList = existingList.tagName.toLowerCase() === 'ol';
        const wantOrderedList = command === 'insertOrderedList';

        if (isOrderedList === wantOrderedList) {
          // Same type, remove list formatting
          document.execCommand(command, false, null);
        } else {
          // Different type, change list type
          const newListType = wantOrderedList ? 'ol' : 'ul';
          const newList = document.createElement(newListType);

          // Copy all list items to new list
          Array.from(existingList.children).forEach(li => {
            newList.appendChild(li.cloneNode(true));
          });

          existingList.parentNode.replaceChild(newList, existingList);

          // Restore selection
          if (range) {
            try {
              selection.removeAllRanges();
              selection.addRange(range);
            } catch (e) {
              // Fallback: place cursor at end of editor
              const newRange = document.createRange();
              newRange.selectNodeContents(editor);
              newRange.collapse(false);
              selection.removeAllRanges();
              selection.addRange(newRange);
            }
          }

          // Trigger change event
          const event = new Event('input', { bubbles: true });
          editor.dispatchEvent(event);
          return;
        }
      } else {
        // Create new list
        document.execCommand(command, false, null);
      }
    } else {
      // Execute other commands normally
      document.execCommand(command, false, value);
    }

    // Maintain focus and update content
    setTimeout(() => {
      editor.focus();
      const event = new Event('input', { bubbles: true });
      editor.dispatchEvent(event);
    }, 10);
  }, []);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    if (editorRef.current && content !== editorRef.current.innerHTML) {
      const currentSelection = window.getSelection();
      const currentRange = currentSelection.rangeCount > 0 ? currentSelection.getRangeAt(0) : null;

      editorRef.current.innerHTML = content;

      // Try to restore selection
      if (currentRange && editorRef.current.contains(currentRange.commonAncestorContainer)) {
        try {
          currentSelection.removeAllRanges();
          currentSelection.addRange(currentRange);
        } catch (e) {
          // Selection restoration failed, place cursor at end
          const range = document.createRange();
          range.selectNodeContents(editorRef.current);
          range.collapse(false);
          currentSelection.removeAllRanges();
          currentSelection.addRange(range);
        }
      }
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
          className="px-2 py-1 text-xs h-8 hover:bg-gray-200"
          title="Bold (Ctrl+B)"
        >
          <strong>B</strong>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('italic')}
          className="px-2 py-1 text-xs h-8 hover:bg-gray-200"
          title="Italic (Ctrl+I)"
        >
          <em>I</em>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('underline')}
          className="px-2 py-1 text-xs h-8 hover:bg-gray-200"
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
          className="px-2 py-1 text-xs h-8 hover:bg-gray-200"
          title="Bullet List"
        >
          <span className="text-lg leading-none">•</span>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('insertOrderedList')}
          className="px-2 py-1 text-xs h-8 hover:bg-gray-200"
          title="Numbered List"
        >
          <span className="text-sm font-mono">1.</span>
        </Button>
        <div className="w-px bg-gray-300 mx-1" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => {
            const url = prompt('Enter URL:');
            if (url) execCommand('createLink', url);
          }}
          className="px-2 py-1 text-xs h-8 hover:bg-gray-200"
          title="Insert Link"
        >
          🔗
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => execCommand('removeFormat')}
          className="px-2 py-1 text-xs h-8 hover:bg-gray-200"
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
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
          style={{
            minHeight: `${height}px`,
            wordBreak: 'break-word',
            lineHeight: '1.5'
          }}
          dangerouslySetInnerHTML={{ __html: content }}
          suppressContentEditableWarning={true}
        />
        {!content && !isFocused && (
          <div
            className="absolute top-3 left-3 pointer-events-none text-gray-400 select-none"
            style={{ lineHeight: '1.5' }}
          >
            {placeholder || 'Enter content...'}
          </div>
        )}
      </div>

      {/* Add some CSS for better list styling */}
      <style jsx>{`
        .p-3 ol {
          list-style-type: decimal;
          margin-left: 1.5em;
          padding-left: 0.5em;
        }
        .p-3 ul {
          list-style-type: disc;
          margin-left: 1.5em;
          padding-left: 0.5em;
        }
        .p-3 li {
          margin: 0.25em 0;
          padding-left: 0.25em;
        }
        .p-3 ol ol {
          list-style-type: lower-alpha;
        }
        .p-3 ol ol ol {
          list-style-type: lower-roman;
        }
        .p-3 ul ul {
          list-style-type: circle;
        }
        .p-3 ul ul ul {
          list-style-type: square;
        }
      `}</style>
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

    // Initialize Summernote with proper configuration
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
      // Enhanced list configuration
      styleTags: [
        'p',
        { title: 'Blockquote', tag: 'blockquote', className: 'blockquote', value: 'blockquote' },
        'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
      ],
      callbacks: {
        onChange: (content) => {
          if (mountedRef.current) {
            onChange(content);
          }
        },
        onInit: function() {
          if (value && mountedRef.current) {
            $editor.summernote('code', value);
          }

          // Fix for list functionality - ensure proper list button behavior
          const $toolbar = $editor.next('.note-editor').find('.note-toolbar');

          // Override the list button handlers
          $toolbar.find('[data-name="ul"]').off('click').on('click', function(e) {
            e.preventDefault();
            $editor.summernote('editor.insertUnorderedList');
          });

          $toolbar.find('[data-name="ol"]').off('click').on('click', function(e) {
            e.preventDefault();
            $editor.summernote('editor.insertOrderedList');
          });
        },
        onKeydown: function(e) {
          // Handle Enter key in lists for better list behavior
          if (e.keyCode === 13) { // Enter key
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
              const range = selection.getRangeAt(0);
              const container = range.commonAncestorContainer;
              const listItem = container.nodeType === Node.TEXT_NODE
                ? container.parentElement?.closest('li')
                : container.closest?.('li');

              if (listItem && listItem.textContent.trim() === '') {
                // Empty list item - let Summernote handle it naturally
                return true;
              }
            }
          }
          return true;
        }
      }
    });

    summernoteInstance.current = $editor;

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
  }, [isReady, height, placeholder]);

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

      {/* Additional CSS for better list styling in Summernote */}
      <style jsx global>{`
        .note-editable ol {
          list-style-type: decimal !important;
          margin-left: 1.5em !important;
          padding-left: 0.5em !important;
        }
        .note-editable ul {
          list-style-type: disc !important;
          margin-left: 1.5em !important;
          padding-left: 0.5em !important;
        }
        .note-editable li {
          margin: 0.25em 0 !important;
          padding-left: 0.25em !important;
          display: list-item !important;
        }
        .note-editable ol ol {
          list-style-type: lower-alpha !important;
        }
        .note-editable ol ol ol {
          list-style-type: lower-roman !important;
        }
        .note-editable ul ul {
          list-style-type: circle !important;
        }
        .note-editable ul ul ul {
          list-style-type: square !important;
        }
      `}</style>
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
  defaultMode = 'simple'
}) => {
  const [editorMode, setEditorMode] = useState(defaultMode);
  const [isLoading, setIsLoading] = useState(false);
  const assetsLoaded = useRef(false);

  // Check if Summernote is already loaded
  useEffect(() => {
    if (window.$ && window.$.fn.summernote) {
      assetsLoaded.current = true;
    }
  }, []);

  const loadSummernoteAssets = useCallback(async () => {
    if (isLoading || assetsLoaded.current) return;

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

      assetsLoaded.current = true;
      setEditorMode('advanced');
    } catch (error) {
      console.error('Failed to load Summernote:', error);
      // Fall back to simple editor if loading fails
      setEditorMode('simple');
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const toggleEditor = useCallback(() => {
    if (editorMode === 'simple') {
      if (!assetsLoaded.current) {
        loadSummernoteAssets();
      } else {
        setEditorMode('advanced');
      }
    } else {
      setEditorMode('simple');
    }
  }, [editorMode, loadSummernoteAssets]);

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
