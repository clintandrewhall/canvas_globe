import { resolve } from 'path';

export default async function(server /*options*/) {
  server.exposeStaticDir('/360/{path*}', resolve(__dirname, 'public/components/globe'));
}
