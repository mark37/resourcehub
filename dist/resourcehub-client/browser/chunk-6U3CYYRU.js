import{Ya as h,w as s,z as i}from"./chunk-WXNTJ4HU.js";var a=(()=>{class r{get(t,e){return this.http.get(`${this.baseUrl}v1/`+t,e||"")}post(t,e){return this.http.post(`${this.baseUrl}v1/`+t,e)}delete(t,e){return this.http.delete(`${this.baseUrl}v1/`+t+e)}register(t){return this.http.post(`${this.baseUrl}register`,t)}checkEmail(t){return this.http.get(`${this.baseUrl}check-email`,t)}login(t){return this.http.post(`${this.baseUrl}login`,t)}update(t,e,o){return this.http.put(`${this.baseUrl}v1/`+t+e,o)}constructor(t){this.http=t,this.baseUrl="https://api.resourcehub.cloud/"}static{this.\u0275fac=function(e){return new(e||r)(i(h))}}static{this.\u0275prov=s({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();export{a};