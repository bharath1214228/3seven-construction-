let config={"download-sample-top":{"event_type":"form-click","event_properties":{"form_type":"download-sample-top","template_type":"new","event_category":"button-click",}},"downloadsample-mobile":{"event_type":"form-click","event_properties":{"form_type":"download-sample-mobile","template_type":"new","event_category":"button-click",}},"download-sample-left":{"event_type":"form-click","event_properties":{"form_type":"download-sample-left","template_type":"new","event_category":"button-click",}},"oldrd-bottom-download-sample":{"event_type":"form-click","event_properties":{"form_type":"download-sample-bottom","template_type":"old","event_category":"button-click",}},"oldrd-right-download-sample":{"event_type":"form-click","event_properties":{"form_type":"download-sample-right","template_type":"old","event_category":"button-click",}},"oldrd-download-sample-top":{"event_type":"form-click","event_properties":{"form_type":"download-sample-top","template_type":"old","event_category":"button-click",}},"oldcustmzeSubmtBtn":{"event_type":"form-submit","event_properties":{"form_type":"customize","template_type":"old","event_category":"button-click",}},"oldrd-customize-report":{"event_type":"form-click","event_properties":{"form_type":"customize-report","template_type":"old","event_category":"button-click",}},"customize-report-right":{"event_type":"form-click","event_properties":{"form_type":"customize-report-right","template_type":"old","event_category":"button-click",}},"get-price-break-up":{"event_type":"form-click","event_properties":{"form_type":"get-price-breakup","template_type":"new","event_category":"button-click",}},"market-snapshot-customize-report":{"event_type":"form-click","event_properties":{"form_type":"market-snapshot-customize-report","template_type":"new","event_category":"button-click",}},"scopeof-the-report-customize":{"event_type":"form-click","event_properties":{"form_type":"scope-of-the-report-customize","template_type":"new","event_category":"button-click",}},"geography-trends-form":{"event_type":"form-click","event_properties":{"form_type":"geography-trends-form","template_type":"new","event_category":"button-click",}},"key-market-trends-download-sample":{"event_type":"form-click","event_properties":{"form_type":"key-market-trends-download-sample","template_type":"new","event_category":"button-click",}},"market-definition-cutomize":{"event_type":"form-click","event_properties":{"form_type":"market-definition-cutomize","template_type":"new","event_category":"button-click",}},"on-scroll-customize":{"event_type":"form-submit","event_properties":{"form_type":"on-scroll-customize","template_type":"new","event_category":"button-click",}},"research-methodology-customize":{"event_type":"form-click","event_properties":{"form_type":"research-methodology-customize","template_type":"new","event_category":"button-click",}},"getSectionWisePricing":{"event_type":"form-click","event_properties":{"form_type":"section-wise-pricing-customize","template_type":"new","event_category":"button-click"}},"view-case-studies-download-sample":{"event_type":"form-click","event_properties":{"form_type":"view-case-studies-download-sample","template_type":"new","event_category":"button-click",}},"talk-to-analyst-contact-us":{"event_type":"form-click","event_properties":{"template_type":"new","event_category":"talk-to-analyst-contact-us"}},"paypal-buynow-proceed":{"event_type":"paypal-buynow-proceed","event_properties":{"event_category":"button-click"}},"clicked-on-toc":{"event_type":"clicked-on-toc","event_properties":{"event_category":"nav-click","template_type":"new",}},"list-of-figures":{"event_type":"clicked-on-list-of-figures","event_properties":{"event_category":"nav-click","template_type":"new",}},"clicked-on-search":{"event_type":"clicked-on-search","event_properties":{"event_category":"search",}},}
let amplitude_envents={};for(let item in config){if(document.getElementById(item)){document.getElementById(item).addEventListener("click",function(){window.amplitude_events={};amplitude_events.form_type=config[item].event_properties.form_type?config[item].event_properties.form_type:null;amplitude_events.event_type=config[item].event_type?config[item].event_type:null;amplitude_events.event_category=config[item].event_properties.event_category?config[item].event_properties.event_category:null;let source=window.location.href.includes("gclid")||window.location.href.includes("fbclid")?"Paid":"Organic";amplitude.getInstance().logEvent(config[item].event_type,{...config[item].event_properties,"landing_page":window.location.href,source});});}}