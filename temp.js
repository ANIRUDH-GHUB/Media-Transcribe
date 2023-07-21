import { writeFile } from "fs";

const text = "WEBVTT\n\n00:00:00.000 --> 00:00:07.000\nWelcome to Solid Tax, Inc. We're the best rated tax preparation and accounting service in Ottawa.\n\n00:00:07.000 --> 00:00:11.000\nBook your appointment at SolidTax.ca now.\n\n"
writeFile('file.txt', text, ()=>{console.log('Done')})