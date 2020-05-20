import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'screeshots';
  isSelected: boolean = false ;
  imgDetails;
  screenshot = new FormGroup({
  	image : new FormControl()
  })

  selectedImage($event){
  	this.imgDetails = $event.target.files[0];
  	this.isSelected = true;
  	console.log(this.imgDetails)
  }

  submit(){
  	// console.log('submit clicked',this.imageFile)
  }
}
