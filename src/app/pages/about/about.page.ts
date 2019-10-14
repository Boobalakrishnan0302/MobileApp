import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import{File} from '@ionic-native/file/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  photos:string[] = [];
  

  constructor(public camera:Camera, public file:File) { }

  ngOnInit() {
  }

  TakePhotos(){

    var options:CameraOptions={

      quality: 100,
       destinationType: this.camera.DestinationType.FILE_URI,
       encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      
        // let base64Image = 'data:image/jpeg;base64,' + imageData;
    let filename= imageData.substring(imageData.lastIndexOf('/')+1);
    
    let path= imageData.substring(0,imageData.lastIndexOf('/')+1);
    this.file.readAsDataURL(path,filename).then((base64data)=>{
      this.photos.push(base64data);

      console.log(this.photos);
    })


    })

    
  }
}

