import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs/internal/operators/filter';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Client } from 'src/app/shared/interfaces/client';

/*
FormControl (1 class) --> 1 champ de formulaire
FormGroup             --> 1 formulaire (groupe de champs)
Service FormBuilder   --> 1 service pour créer facilement FormGroup et FormControl
*/

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  public myForm!: FormGroup
  public ClientStateVal = Object.values(ClientState)

  @Output() public submitted = new EventEmitter()
  @Input() public clientInitial: Client = { name: "", email:"", comment:"", state: ClientState.ACTIF }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm  = this.fb.group(
      {
        name: [this.clientInitial.name, Validators.required],
        email: this.fb.control(this.clientInitial.email, Validators.compose([Validators.required, Validators.email])),
        comment: this.clientInitial.comment,
        state: this.clientInitial.state
      }
    )

    this.name.valueChanges
    .pipe(
      filter(val => val === "clement")
    )
    .subscribe(
      (data) => this.email.setValue("clement.fermin@gmail.com")
    )
  }

  get name(){
    return this.myForm.get('name') as FormControl
  }

  get email(){
    return this.myForm.get('email') as FormControl
  }

  register(){
    console.log(this.myForm.value)
    this.submitted.emit(this.myForm.value)
  }

}
