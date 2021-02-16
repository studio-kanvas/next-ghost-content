### From The Ground Up

Key takeaways:

-   Refer to header for active/inactive links
-   Global styled-components allows for rapid prototyping
-   Next.config.js houses env files in conjunction with `.env.local`
-   Ghost is installed in backend and hosted externally. App utilizes Ghost Content API to fetch data with getStaticProps/getStaticPaths
-   Content cannot be loaded if it cannot be serialized into JSON. Ghost Content API is serializable but the JavaScript Content API is not
-   Data is hydrated statically in `/data` section
-   Dynamic routes are configured via `pages/blog/[slug]`. Refer to file for more information
