// Components/Breadcrumb.js
import {
  Breadcrumb as BC,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { router, usePage } from "@inertiajs/react";

export default function Breadcrumb() {
  const { url } = usePage();

  // Remove query parameters and hash from URL before processing
  const baseUrl = url.split('?')[0].split('#')[0];
  const paths = baseUrl.split('/').filter(Boolean);

  // Custom title mapping for specific routes
  const routeTitles = {
    'dashboard': 'Dashboard',
    'profile': 'User Profile',
    'products': 'Products',
    'users': 'Users',
    'settings': 'Settings',
    // Add more mappings as needed
  };

  // Generate breadcrumb items
  const breadcrumbItems = paths.map((segment, index) => {
    const isLast = index === paths.length - 1;
    const path = `/${paths.slice(0, index + 1).join('/')}`;

    // Clean up segment and convert to title case
    const cleanSegment = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());

    const title = routeTitles[segment.toLowerCase()] || cleanSegment;

    return {
      title,
      path,
      isLast,
    };
  });

  // Always start with Dashboard if not already present
  if (!paths.some(p => p.toLowerCase() === 'dashboard')) {
    breadcrumbItems.unshift({
      title: 'Dashboard',
      path: '/dashboard',
      isLast: false,
    });
  }

  return (
    <BC>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            {index > 0 && <BreadcrumbSeparator className="hidden md:block" />}
            <BreadcrumbItem className={index === 0 ? 'hidden md:block' : ''}>
              {item.isLast ? (
                <BreadcrumbPage>
                  {item.title}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink onClick={() => router.get(item.path)}>
                  {item.title}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </BC>
  );
}
