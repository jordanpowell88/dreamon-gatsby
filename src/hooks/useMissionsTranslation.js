import { useStaticQuery, graphql } from "gatsby";
import { useLocale } from "./useLocale";

const query = graphql`
  query useMissionsTranslations {
    allFile(filter: {relativeDirectory: {eq: "translations"}}) {
      edges {
        node {
          name
          childrenTranslationsJson {
            missions {
                pageTitle,
                upcomingTripsTitle,
                upcomingTripsDescription,
                trips {
                  honduras {
                    country,
                    date,
                    link
                  },
                  brazil {
                    country,
                    date,
                    link
                  }
                }
            }
          }
        }
      }
    }
  }
`;

// This hook simplifies query response for current language.
const useMissionsTranslation = () => {
    const { locale } = useLocale();
    const { allFile } = useStaticQuery(query);
  
    // Extract all lists from GraphQL query response
    const queryList = allFile.edges.map(item => {
      const currentFileTitle = Object.keys(item.node).filter(
        item => item !== 'name',
      )[0];
  
      return {
        name: item.node.name,
        ...item.node[currentFileTitle][0],
      };
    });
  
    // Return translation for the current locale
    return queryList.filter(lang => lang.name === locale)[0];
  };
  
  export default useMissionsTranslation;