import { GetServerSideProps, GetServerSidePropsResult } from "next"


// export type PageProps =
//   Unauthorized | DefaultPageProps
// export default function Slug(props: PageProps) {
//   if ("unauthorized" in props) {
//     return null
//   }
//   return <DefaultPage {...props} />
// }
//
// export const getServerSideProps: GetServerSideProps<PageProps> = async ({
//                                                                           query,
//                                                                           params,
//                                                                           req,
//                                                                           res,
//                                                                         }) => {
//   if (query?.preview && !isAuthenticated(req, process.env.SITE_PREVIEW_CREDENTIALS)) {
//     return { props: authenticate(res, "Preview") }
//   }
//
//   const rawPath = params?.path
//   const path = Array.isArray(rawPath) ? rawPath.join("/") : rawPath || ""
//   const response = await match<GetServerSidePropsResult<PageProps>>(path, {
//     [`^app/se/(${availableLocales.join("|")})/(.*)$`]: async (locale, slug) => {
//       const context = createContext({
//         locale: localeFromString(locale),
//         previewMode: !!query?.preview,
//       })
//       const appView = await getAppView(context, slug)
//       const components = await getComponents(context, { fields: appView })
//       const translations = await getTranslations(context.locale)
//
//     }