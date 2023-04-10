import { FormGroup } from "@angular/forms";

export function MustMatch(val1:string,val2:string){
    return(
        formGroup:FormGroup
    )=>{
        const name=formGroup.controls[val1];
       const confName=formGroup.controls[val2];
       if(name.value!==confName.value){
           confName.setErrors({confirm:true});
       }else{
        confName.setErrors(null);

       }

    }
}