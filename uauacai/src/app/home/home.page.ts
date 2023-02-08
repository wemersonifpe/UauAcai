import { Component, OnInit } from '@angular/core';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import { Directory, Filesystem } from '@capacitor/filesystem';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  myForm: FormGroup;
  base64Image = null;
  photoPreview = null;
  pdfObj = null;
  logoData = null;
  //logo: { image: any; width: number; };

  constructor( 
    private fb: FormBuilder, 
    private fileOpner: FileOpener, 
    private plt: Platform, 
    private http: HttpClient) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      showLogo: true,
      from: 'Simon',
      to: 'Max',
      text: 'TEST'
    });
    this.loadLocalAssetToBasse64();
  }

  loadLocalAssetToBasse64(){
    this.http.get('./assets/icon/favicon.png', { responseType: 'blob'})
    .subscribe(res => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.logoData = reader.result;
      }
      reader.readAsDataURL(res);
    });
  }

  createPdf(){
    const formValue = this.myForm.value;
    let logo = {}
    if(formValue.showLogo){
      logo = { image: this.logoData, width: 50};
    }

    const docDef = {
      pageSize: 'A4',
     /* pageSize: {
        width: 595.28,
        height: 'auto'
      },*/
      pageOrientation: 'portrait',
      pageMargins: [40, 60, 40, 60],

      watermark: { text: 'Ionic Frameork', color: 'blue', opacity: 0.2, bold: true},
      content: [
        {
          columns: [
            logo,
            {
              text: new Date().toTimeString(),
              alignment: 'right'
            }
          ]
          
        },
        { text: 'REMINDER', style: 'header'},
        {
          columns: [
            {
              width: '50%',
              text: 'From',
              style: 'subheader'
            },
            {
              width: '50%',
              text: 'To',
              style: 'subheader'
            }
          ]
        },
        {
          columns: [
            {
              width: '50%',
              text: formValue.from
            },
            {
              width: '50%',
              text: formValue.to
            }
          ]
        },
        //image,
        { text: formValue.text, margin: [0, 20, 0, 20]},
      ],
      styler: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        }
      }
    }

    //creat pdf
    this.pdfObj = pdfMake.createPdf(docDef);
    console.log(this.pdfObj);
    //download pdf in browser
    //this.pdfObj.download('demo.pdf');
  }

  downloadPdf(){
    if (this.plt.is('cordova')) {
      this.pdfObj.getBase64(async (data) => {
        try {
          let path = `pdf/myletter_${Date.now()}.pdf`;

          const result = await Filesystem.writeFile({
            path,
            data: data,
            directory: Directory.Documents,
            recursive: true
          });
          this.fileOpner.open(`${result.uri}`, 'application/pdf');

        } catch (e) {
          console.error('Unable to write file', e);
        
      }});
    } else {
      this.pdfObj.download();
    }
  }

}
