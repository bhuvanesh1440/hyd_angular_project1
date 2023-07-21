import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

import { MatTableDataSource } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  standalone:true,
  imports:[MatButtonModule,MatIconModule,MatToolbarModule,MatTableModule,FormsModule]
  
})
export class TestComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // Form properties
  formData: PeriodicElement = { name: '', position: '', weight: '', symbol: '' };

  // Function to handle form submission
  onSubmit() {
    this.dataSource.data.push(this.formData);
    this.dataSource._updateChangeSubscription(); // Update the data source
    this.resetForm();
  }

  // Function to reset the form after submission
  resetForm() {
    this.formData = { name: '', position: '', weight: '', symbol: '' };
  }
  
  // Method to update an element
  updateElement(element: PeriodicElement) {
    // Implement the update logic here
    console.log('Update element:', element);
  }

  // Method to delete an element
  deleteElement(element: PeriodicElement) {
    // Implement the delete logic here
    const index = this.dataSource.data.indexOf(element);
    if (index !== -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription(); // Update the data source
    }
  }
  


  

}



export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Hydrogen', name: 'Hydrogen', weight: 'Hydrogen', symbol: 'H'},
  {position: 'Hydrogen', name: 'Hydrogen', weight: 'Hydrogen', symbol: 'H'},
  {position: 'Hydrogen', name: 'Hydrogen', weight: 'Hydrogen', symbol: 'H'},
  {position: 'Hydrogen', name: 'Hydrogen', weight: 'Hydrogen', symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


// export class TableBasicExample {
//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataSource = ELEMENT_DATA;
//}
