import { writable } from 'svelte/store';
import { browser } from "$app/environment";
import { setCookie, getCookie, cookieOptions } from "./cookieFunctions";
import {verifyJWT, createAndSignJWT} from "./jwt";

export const user = writable(null);
const getSettings = browser ? JSON.parse(getCookie("settings") || "{}") : {};
const settings = writable<object>(getSettings?.theme ? getSettings : {
	theme: "dark",
	tips: true,
	ads: true,
	privatePlugins: false,
	sortingMethod: "ascending",
	contentFiltering: "",
	timezone: "none"
  });
const getBotToken = browser ? getCookie("token") : "";
let getBotTokenVerified: string;
try{
	if (!getBotToken) throw new Error("No token");
	getBotTokenVerified = (await verifyJWT(getBotToken)).payload.value ?? "";
}catch(error){
	getBotTokenVerified = "";
}
const botToken = writable<string>(getBotTokenVerified);
  export { settings, botToken }