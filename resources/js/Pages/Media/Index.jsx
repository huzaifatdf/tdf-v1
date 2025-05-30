import React, { useState, useRef } from 'react';
import {
  Upload,
  Trash2,
  Link,
  Eye,
  Grid3X3,
  List,
  Search,
  X,
  Image,
  File,
  Video,
  Music,
  Download,
} from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';

const MediaLibrary = ({ media, filters }) => {
  const { collections } = usePage().props;
  const [selectedItems, setSelectedItems] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const fileInputRef = useRef(null);
  const [notification, setNotification] = useState(null);

  const { data, setData, post, processing, errors, reset } = useForm({
    files: [],
    collection: '',
  });

  // Format file size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i]);
  };

  // Get file type icon
  const getFileIcon = (mimeType) => {
    if (mimeType.startsWith('image/')) return <Image className="w-4 h-4" />;
    if (mimeType.startsWith('video/')) return <Video className="w-4 h-4" />;
    if (mimeType.startsWith('audio/')) return <Music className="w-4 h-4" />;
    return <File className="w-4 h-4" />;
  };


  // Handle file upload
  const handleFileUpload = (e) => {
    e.preventDefault();

    post(route('media.upload'), {
      onSuccess: () => {
        setShowUploadModal(false);
        reset();
        router.reload();
      },
    });
  };

  //showNotification
    const showNotification = (message, type = 'success') => {
      setNotification({ message, type });
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    };

  // Copy media URL
  const copyMediaUrl = (url) => {
    navigator.clipboard.writeText(url);
    showNotification('Media URL copied to clipboard!');
  };

  // Delete media items
  const deleteMediaItems = (ids) => {
    if (ids.length === 1) {
      router.delete(route('media.destroy', ids[0]), {
        onSuccess: () => {
          setSelectedItems([]);
        },
      });
    } else {
      router.post(route('media.bulkDestroy'), {
        data: { ids },
        onSuccess: () => {
          setSelectedItems([]);
        },
      });
    }
  };

  // Toggle item selection
  const toggleSelection = (id) => {
    setSelectedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Media grid item component
  const MediaGridItem = ({ item }) => (
    console.log(item),
    <div
      className={`relative group border rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-md ${
        selectedItems.includes(item.id) ? 'ring-2 ring-blue-500' : ''
      }`}
      onClick={() => toggleSelection(item.id)}
    >
      {/* Thumbnail */}
      <div className="aspect-square bg-gray-100 flex items-center justify-center">
        {item.mime_type.startsWith('image/') ? (
          <img
            src={item.conversions?.thumb || item.original_url}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400">
            {getFileIcon(item.mime_type)}
          </div>
        )}
      </div>

      {/* Overlay actions */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedMedia(item);
              setShowDetailsModal(true);
            }}
            className="p-2 bg-white rounded-full hover:bg-gray-100"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              copyMediaUrl(item.original_url);
            }}
            className="p-2 bg-white rounded-full hover:bg-gray-100"
          >
            <Link className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteMediaItems([item.id]);
            }}
            className="p-2 bg-white rounded-full hover:bg-gray-100 text-red-500"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Selection checkbox */}
      <div className="absolute top-2 left-2">
        <input
          type="checkbox"
          checked={selectedItems.includes(item.id)}
          onChange={() => toggleSelection(item.id)}
          className="w-4 h-4 rounded border-gray-300"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {/* File info */}
      <div className="p-3 bg-white">
        <p className="text-sm font-medium truncate">{item.name}</p>
        <p className="text-xs text-gray-500">{formatFileSize(item.size)}</p>
      </div>
    </div>
  );

  // Media list item component
  const MediaListItem = ({ item }) => (
    <div
      className={`flex items-center gap-4 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 ${
        selectedItems.includes(item.id) ? 'bg-blue-50 border-blue-300' : ''
      }`}
      onClick={() => toggleSelection(item.id)}
    >
      <input
        type="checkbox"
        checked={selectedItems.includes(item.id)}
        onChange={() => toggleSelection(item.id)}
        className="w-4 h-4 rounded border-gray-300"
        onClick={(e) => e.stopPropagation()}
      />

      <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
        {item.mime_type.startsWith('image/') ? (
          <img
            src={item.conversions?.thumb || item.original_url}
            alt={item.name}
            className="w-full h-full object-cover rounded"
          />
        ) : (
          getFileIcon(item.mime_type)
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-medium truncate">{item.name}</p>
        <p className="text-sm text-gray-500">{item.mime_type}</p>
      </div>

      <div className="text-right text-sm text-gray-500">
        <p>{formatFileSize(item.size)}</p>
        <p>{new Date(item.created_at).toLocaleDateString()}</p>
      </div>

      <div className="flex gap-1">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSelectedMedia(item);
            setShowDetailsModal(true);
          }}
          className="p-2 hover:bg-gray-200 rounded"
        >
          <Eye className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            copyMediaUrl(item.original_url);
          }}
          className="p-2 hover:bg-gray-200 rounded"
        >
          <Link className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteMediaItems([item.id]);
          }}
          className="p-2 hover:bg-gray-200 rounded text-red-500"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <AuthenticatedLayout>
      <Head title="Media Library" />

            <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2 p-10">
          <div className="w-full space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Media Library</h1>
            <p className="text-gray-600">Manage your media files</p>
          </div>
          <button
            onClick={() => setShowUploadModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Upload className="w-4 h-4" />
            Upload Files
          </button>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search media..."
                defaultValue={filters.search}
                onChange={(e) => router.get(route('media.index'), { search: e.target.value }, { preserveState: true })}
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <select
              defaultValue={filters.collection || 'all'}
              onChange={(e) => router.get(route('media.index'), { collection: e.target.value }, { preserveState: true })}
              className="px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="all">All Collections</option>
              {collections.map(collection => (
                <option key={collection} value={collection}>{collection}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            {selectedItems.length > 0 && (
              <button
                onClick={() => deleteMediaItems(selectedItems)}
                className="flex items-center gap-2 px-3 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
                Delete Selected ({selectedItems.length})
              </button>
            )}

            <div className="flex border rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Media Grid/List */}
        {media.data.length > 0 ? (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {media.data.map(item => (
                <MediaGridItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {media.data.map(item => (
                <MediaListItem key={item.id} item={item} />
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Image className="w-16 h-16 mx-auto" />
            </div>
            <p className="text-gray-500">No media files found</p>
          </div>
        )}

        {/* Pagination */}
        {media.data.length > 0 && (
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Showing {media.from} to {media.to} of {media.total} items
            </div>
            <div className="flex gap-1">
              {media.links.map((link, index) => (
                <button
                  key={index}
                  onClick={() => router.get(link.url, {}, { preserveState: true })}
                  className={`px-3 py-1 rounded ${link.active ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  dangerouslySetInnerHTML={{ __html: link.label }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Upload Files</h2>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleFileUpload}>
                <div className="space-y-4">
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-400 mt-2">PNG, JPG, PDF, MP4, MP3 up to 10MB</p>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*,video/*,audio/*,.pdf"
                    onChange={(e) => setData('files', Array.from(e.target.files))}
                    className="hidden"
                  />

                  {data.files.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="font-medium">Selected Files:</h3>
                      <ul className="max-h-40 overflow-y-auto">
                        {data.files.map((file, index) => (
                          <li key={index} className="text-sm text-gray-600 truncate">
                            {file.name} ({formatFileSize(file.size)})
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Collection
                    </label>
                    <select
                      value={data.collection}
                      onChange={(e) => setData('collection', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Default</option>
                      {collections.map(collection => (
                        <option key={collection} value={collection}>{collection}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowUploadModal(false)}
                      className="px-4 py-2 text-gray-600 border rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={processing || data.files.length === 0}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                      {processing ? 'Uploading...' : 'Upload Files'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Details Modal */}
        {showDetailsModal && selectedMedia && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Media Details</h2>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  {selectedMedia.mime_type.startsWith('image/') ? (
                    <img
                      src={selectedMedia.original_url}
                      alt={selectedMedia.name}
                      className="w-full rounded-lg"
                    />
                  ) : (
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      {getFileIcon(selectedMedia.mime_type)}
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">File Name</label>
                    <p className="text-sm text-gray-900">{selectedMedia.name}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">File Type</label>
                    <p className="text-sm text-gray-900">{selectedMedia.mime_type}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">File Size</label>
                    <p className="text-sm text-gray-900">{formatFileSize(selectedMedia.size)}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Uploaded</label>
                    <p className="text-sm text-gray-900">
                      {new Date(selectedMedia.created_at).toLocaleDateString()} at{' '}
                      {new Date(selectedMedia.created_at).toLocaleTimeString()}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Collection</label>
                    <p className="text-sm text-gray-900">{selectedMedia.collection_name}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">URL</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={selectedMedia.original_url}
                        readOnly
                        className="flex-1 px-3 py-2 border rounded text-sm bg-gray-50"
                      />
                      <button
                        onClick={() => copyMediaUrl(selectedMedia.original_url)}
                        className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        <Link className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <a
                      href={selectedMedia.original_url}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                    <button
                      onClick={() => {
                        deleteMediaItems([selectedMedia.id]);
                        setShowDetailsModal(false);
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notification */}
        {notification && (
          <div className="fixed bottom-4 right-4 z-50">
            <Alert className={`${notification.type === 'success' ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
              <AlertDescription>{notification.message}</AlertDescription>
            </Alert>
          </div>
        )}
      </div>
            </div>
            </div>
    </AuthenticatedLayout>
  );
};

export default MediaLibrary;
