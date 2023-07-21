import { Component } from '@angular/core';
import { studentDetails } from 'src/app/student-details';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent {
  constructor (){
    console.log(this.Results[0]);
    
  }
  
  a:any=[];
  
  Results:any=[['21471A05k4','Bhuvanesh','CSE','3rd Year']]
  formData: studentDetails={Htno:'',studentName:'',Branch:'',Year:''};
  formData1: studentDetails={Htno:'',studentName:'',Branch:'',Year:''};

 Add(){
  
  const newData = [this.formData.Htno, this.formData.studentName, this.formData.Branch, this.formData.Year];
    this.Results.push(newData);

    console.log(this.Results);

    // Clear the form after pushing data
    this.formData.Htno = '';
    this.formData.studentName = '';
    this.formData.Branch = '';
    this.formData.Year = '';

    console.log(this.Results);
 };
 check(Data:any){
  this.a=Data;
  console.log(Data);
  console.log(this.a);
  this.formData1.Htno=this.a[0]
  this.formData1.studentName=this.a[1]
  this.formData1.Branch=this.a[2]
  this.formData1.Year=this.a[3]
  // formData1: studentDetails={Htno:'',studentName:'',Branch:'',Year:''};

 }

 updateData(Data: studentDetails) {
  const index = this.Results.indexOf(Data);
  const newData = [this.formData1.Htno, this.formData1.studentName, this.formData1.Branch, this.formData1.Year];
  this.Results[index] = newData;

  // Clear the form after updating data
  this.formData.Htno = '';
  this.formData.studentName = '';
  this.formData.Branch = '';
  this.formData.Year = '';

  console.log(this.Results);
}

 deleteData(Data: studentDetails) {
  console.log(Data);
  const index = this.Results.indexOf(Data);
  console.log(Data);
    if (index !== -1) {
      this.Results.splice(index, 1);
      // this.dataSource._updateChangeSubscription(); // Update the data source
    }

  }
  

}
