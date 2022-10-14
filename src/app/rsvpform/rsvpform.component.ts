import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rsvpform',
  templateUrl: './rsvpform.component.html',
  styleUrls: ['./rsvpform.component.css']
})
export class RsvpformComponent implements OnInit {
  name = 'Angular';  
  AddFamillyForm!: FormGroup;  
  constructor(private fb:FormBuilder) { 
  this.AddFamillyForm = this.fb.group({  
    name: '',  
    quantities: this.fb.array([]) ,  
  });  
  
}

quantities() : FormArray {  
  return this.AddFamillyForm.get("quantities") as FormArray  
}  
   
newQuantity(): FormGroup {  
  return this.fb.group({  
    familyMemberName: '',  
    familyMemberGender: '',  
  })  
}  
   
addQuantity() {  
  this.quantities().push(this.newQuantity());  
}  
   
removeQuantity(i:number) {  
  this.quantities().removeAt(i);  
}  
   
onSubmit() {  
  console.log(this.AddFamillyForm.value);  
}  
  ngOnInit(): void {
  }

}
