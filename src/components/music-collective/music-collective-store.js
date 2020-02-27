import React from 'react';

function loadScript(scriptURL) {
  var script = document.createElement('script');
  script.async = true;
  script.src = scriptURL;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
  script.onload = ShopifyBuyInit;
}

function ShopifyBuyInit() {
  var client = window.ShopifyBuy.buildClient({
    domain: 'dream-on-world.myshopify.com',
    storefrontAccessToken: '7f050812f0b0d5891bfc0e65ae93cb11',
  });

  window.ShopifyBuy.UI.onReady(client).then(function (ui) {
    ui.createComponent('collection', {
      id: 82391334966,
      node: document.getElementById('collection-component-e71072c8db1'),
      moneyFormat: '%24%7B%7Bamount%7D%7D',
      options: {
            "product": {
              "variantId": "all",
              "contents": {
                "imgWithCarousel": false,
                "variantTitle": false,
                "description": false,
                "buttonWithQuantity": false,
                "quantity": false
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px",
                    "width": "calc(25% - 20px)"
                  },
                  "imgWrapper": {
                    "position": "relative",
                    "height": "0",
                    "padding-top": "calc(75% + 15px)"
                  },
                  "img": {
                    "height": "calc(100% - 15px)",
                    "position": "absolute",
                    "left": "0",
                    "right": "0",
                    "top": "0"
                  }
                },
                "button": {
                  "background-color": "#cc446c",
                  ":hover": {
                    "background-color": "#b83d61"
                  },
                  ":focus": {
                    "background-color": "#b83d61"
                  }
                }
              }
            },
            "cart": {
              "contents": {
                "button": true
              },
              "styles": {
                "button": {
                  "background-color": "#cc446c",
                  ":hover": {
                    "background-color": "#b83d61"
                  },
                  ":focus": {
                    "background-color": "#b83d61"
                  }
                },
                "footer": {
                  "background-color": "#ffffff"
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "variantTitle": false,
                "buttonWithQuantity": true,
                "button": false,
                "quantity": false
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  "background-color": "#cc446c",
                  ":hover": {
                    "background-color": "#b83d61"
                  },
                  ":focus": {
                    "background-color": "#b83d61"
                  }
                }
              }
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "background-color": "#cc446c",
                  ":hover": {
                    "background-color": "#b83d61"
                  },
                  ":focus": {
                    "background-color": "#b83d61"
                  }
                }
              }
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            }
          }
        });
      });
}

const MusicCollectiveStore = () => {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript(scriptURL);
    }
  } else {
    loadScript(scriptURL);
  }

  return (
    <>
      <h2>Store</h2>
      <hr />
      <div id='collection-component-e71072c8db1'></div>
    </>
  )
}
export default MusicCollectiveStore;

