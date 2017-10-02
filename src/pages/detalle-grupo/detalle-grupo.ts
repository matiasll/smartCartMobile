import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ActionSheetController} from 'ionic-angular';
import {DetalleListaPage} from "../detalle-lista/detalle-lista";

/**
 * Generated class for the DetalleGrupoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-grupo',
  templateUrl: 'detalle-grupo.html',
})
export class DetalleGrupoPage {

  nombreDelGrupo:string;
  members=[
    {name:'Juan'},
    {name:'Azul'},
    {name:'Florencia'},
    {name:'Cristobal'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl:ActionSheetController) {
    console.log(this.navParams.get('nombre'));
    this.nombreDelGrupo = this.navParams.get('nombre');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleGrupoPage');
  }

  showDelete(member) {
    let actionSheet = this.actionSheetCtrl.create({
      title: member.name,
      buttons: [
        {
          text: 'Eliminar del grupo',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  verLista(){
    this.navCtrl.push(DetalleListaPage);
  }



}
