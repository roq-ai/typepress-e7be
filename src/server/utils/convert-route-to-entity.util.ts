const mapping: Record<string, string> = {
  contents: 'content',
  organizations: 'organization',
  plugins: 'plugin',
  templates: 'template',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
