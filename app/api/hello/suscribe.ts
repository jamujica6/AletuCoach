// pages/api/subscribe.ts
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library'
// import creds from '../../../claveAPIgoogle.json'; // the file saved above

const privateKey = process.env.GOOGLE_PRIVATE_KEY; // Reemplaza \n por saltos de línea
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
// const projectId = process.env.GOOGLE_PROJECT_ID;


const SCOPES = ['https://www.googleapis.com/auth/spreadsheets',
                'https://www.googleapis.com/auth/drive.file', ];
    
    const jwt = new JWT({
      email: clientEmail,
      key: privateKey,
      scopes: SCOPES,   });

     // const API_KEY = "AIzaSyDh26z2nAn6mi89UJzFbPOYztnjs9Dr_ZE";
    const SPREADSHEET_ID = '1spu8Fk_ZLvDR4gGBXftn5bShWQERcWdG8YxSyJxjYHs';
    // const SHEET_NAME = 'Correos'; // Replace with your sheet name

export default async function insertRowInGoogleSheet(email:string) {
  try {

    

    // Load the service account credentials
   
   
    // Initialize the sheet
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, jwt);
    
    // Authenticate with the service account
      
    // Load the document properties and worksheets
    await doc.loadInfo();
    // const sheet2 = await doc.addSheet({ headerValues: ['name', 'email'] });
    // Get the first sheet (you can also use doc.sheetsByTitle['SheetName'] for a specific sheet)
    const sheet = doc.sheetsByIndex[0];

    const formattedEmail = `${email},`;

    // Insert a new row with the provided data
    await sheet.addRow({'Correos': formattedEmail});
    console.log('Row inserted successfully',email);
  } catch (error:any) {
    console.error('Error inserting row:', error);
  }
}



  


