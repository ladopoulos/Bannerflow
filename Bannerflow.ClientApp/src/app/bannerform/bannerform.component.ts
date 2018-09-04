import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, AUTOCOMPLETE_PANEL_HEIGHT } from '@angular/material';

import { BannerlistComponent } from '../bannerlist/bannerlist.component';

import { IBanner } from '../model/banner';
import { BannerService } from '../services/banner.service';
import { DBOperation } from '../shared/DBOperation';
import { Global } from '../shared/Global';

@Component({
    selector: 'app-bannerform',
    templateUrl: './bannerform.component.html',
    styleUrls: ['./bannerform.component.css']
})

export class BannerformComponent implements OnInit {
    html: string;
    indLoading = false;
    bannerFrm: FormGroup;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private _bannerService: BannerService,
        public dialogRef: MatDialogRef<BannerlistComponent>) { }

    ngOnInit() {
        // built form
        this.bannerFrm = this.fb.group({
            id: [''],
            html: ['', [Validators.required]]                      
            
        });

        // subscribe on value changed event of form to show validation message
        this.bannerFrm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged();

        if (this.data.dbops === DBOperation.create) {
            this.bannerFrm.reset();
        } else {                      
            this.bannerFrm.controls['html'].setValue(this.data.banner.html);
            this.bannerFrm.controls['id'].setValue(this.data.banner.id);            
      }

        this.SetControlsState(this.data.dbops === DBOperation.delete ? false : true);
    }
    // form value change event
    onValueChanged(data?: any) {
        if (!this.bannerFrm) { return; }
        const form = this.bannerFrm;
        // tslint:disable-next-line:forin
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            // setup custom validation message to form
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                // tslint:disable-next-line:forin
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }
    // form errors model
    // tslint:disable-next-line:member-ordering
    formErrors = {
        'html': ''
    };
    // custom valdiation messages
    // tslint:disable-next-line:member-ordering
    validationMessages = {
        'html': {
          'required': 'html markup is required.'
        }
    };
    onSubmit(formData: any) {
        const bannerData = formData.value;
        switch (this.data.dbops) {
            case DBOperation.create:
                this._bannerService.addBanner(Global.BASE_USER_ENDPOINT, bannerData).subscribe(
                    data => {
                        // Success                      
                        this.dialogRef.close('success');
                    },
                    error => {
                      this.dialogRef.close('error');
                    }
                );
                break;
            case DBOperation.update:
                this._bannerService.updateBanner(Global.BASE_USER_ENDPOINT, bannerData.id, bannerData).subscribe(
                    data => {
                        this.dialogRef.close('success');
                    },
                    error => {
                        this.dialogRef.close('error');
                    }
                );
                break;
            case DBOperation.delete:
                this._bannerService.deleteBanner(Global.BASE_USER_ENDPOINT, bannerData.id).subscribe(
                    data => {
                        this.dialogRef.close('success');
                    },
                    error => {
                        this.dialogRef.close('error');
                    }
                );
                break;
        }
    }
    SetControlsState(isEnable: boolean) {
        isEnable ? this.bannerFrm.enable() : this.bannerFrm.disable();
    }
}
