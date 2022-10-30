var base_url=window.location.href.indexOf("mordorintelligence")!=-1?"https://express.mordorintelligence.com":window.location.href.indexOf("mordorlabs")!=-1?"https://express.mordorlabs.com":"http://localhost:8080"
const spinner=document.getElementById("spinner");let abortController=new AbortController();function searchReports(search_query){const myNode=document.getElementsByClassName("search-results-wrapper");document.getElementsByClassName('opacity-toggle')[0].style.opacity=0.3;myNode.innerHTML="";spinner.removeAttribute('hidden');abortController.abort();abortController=new AbortController();if(search_query){fetch(`${base_url}/api/reports/search?q=${search_query}`,{signal:abortController.signal}).then(function(res){if(!res.ok)throw new Error(res.status);else return res.json();}).then(function(res){spinner.setAttribute('hidden','');document.getElementsByClassName('opacity-toggle')[0].style.opacity=1;res.map((item)=>{const div=document.createElement("div");div.classList.add("search-report-title");const link=document.createElement('a');div.style.width="100%";div.style.height="auto";div.style.borderLeft="1px solid rgb(230, 232, 243)";div.style.borderRight="1px solid rgb(230, 232, 243)";div.style.borderBottom="1px solid rgb(230, 232, 243)";link.style.color="rgb(90, 94, 112)";div.style.display="block";div.style.textDecoration="none";div.style.padding="10px 20px";div.style.fontFamily="regular_medium";div.style.transition="all 0.2s ease-out 0s";link.href=`/industry-reports/${item.slug}`;link.target='_blank';link.innerText=item.title;div.appendChild(link);document.getElementsByClassName("search-results-wrapper")[0].appendChild(div);})}).catch(error=>{spinner.setAttribute('hidden','');document.getElementsByClassName('opacity-toggle')[0].style.opacity=1;if(error.name==='AbortError'){return;}else{var removeSearchTitleDivs=document.getElementsByClassName("search-report-title");for(var i=removeSearchTitleDivs.length-1;i>=0;i--){removeSearchTitleDivs[i].remove();}
var removeDataNotFounddivs=document.getElementsByClassName("data-not-found");for(var i=removeDataNotFounddivs.length-1;i>=0;i--){removeDataNotFounddivs[i].remove();}
if(search_query){const div=document.createElement("div");div.classList.add("data-not-found");div.style.textAlign="center";div.style.padding="10px 20px";div.style.border='1px solid rgb(230, 232, 243)';div.innerHTML+='DATA NOT FOUND';document.getElementsByClassName("search-results-wrapper")[0].appendChild(div);}}})}}