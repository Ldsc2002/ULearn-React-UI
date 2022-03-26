// eslint-disable-next-line
import React from 'react';
import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "frontpage_textblock_928127";
    item['en'] = "Hi, this is me.";
    
    item = {};
    this.items.push(item);
    item['key'] = "storyofme_textblock_356422";
    item['en'] = "How I became me";
    
    item = {};
    this.items.push(item);
    item['key'] = "storyofme_text_424913";
    item['en'] = "Music has always been a big part of my life - I was born to a musical family, my father was an opera singer and mother a jazz musician. When I was younger, they used to drag me backstage and joke that music is practically embedded in my DNA!";
    
    item = {};
    this.items.push(item);
    item['key'] = "storyofme_textcopy_767796";
    item['en'] = "I have always been artistic. By the time I was 6, I was already playing the piano and writing my own songs. When I turned 17, I had already struck a record deal. The company found me on YouTube, where my trumpet covers blew them away.\n\nLately I’ve been working on my first single, which will be out in June. Stay tuned!";
    
    item = {};
    this.items.push(item);
    item['key'] = "tabbarbutton_title_398788";
    item['en'] = "Unselected";
    
    item = {};
    this.items.push(item);
    item['key'] = "tabbarbutton_title_266824";
    item['en'] = "Selected";
    
    item = {};
    this.items.push(item);
    item['key'] = "contact_text_1010756";
    item['en'] = "Contact";
    
    item = {};
    this.items.push(item);
    item['key'] = "contact_text2_380494";
    item['en'] = "indieartist@example.com";
    
    item = {};
    this.items.push(item);
    item['key'] = "contact_button_815456";
    item['en'] = "Email me";
    
    item = {};
    this.items.push(item);
    item['key'] = "contact_textcopy_519705";
    item['en'] = "321 Hayes St\nSan Francisco, CA 94102\nUS";
    
    item = {};
    this.items.push(item);
    item['key'] = "contact_buttoncopy_845993";
    item['en'] = "Show on map";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text_897739";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "concertdetails_text_149016";
    item['en'] = "(City)";
    
    item = {};
    this.items.push(item);
    item['key'] = "concertdetails_text2_1004874";
    item['en'] = "(date)";
    
    item = {};
    this.items.push(item);
    item['key'] = "concertdetails_textcopy_463438";
    item['en'] = "Tickets";
    
    item = {};
    this.items.push(item);
    item['key'] = "concertdetails_textcopy2_209355";
    item['en'] = "To who?";
    
    item = {};
    this.items.push(item);
    item['key'] = "contact_text3_243224";
    item['en'] = "(Concert title)";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem1_text3_498009";
    item['en'] = "(Concert title)";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem1_textcopy_950539";
    item['en'] = "(Date)";
    
    item = {};
    this.items.push(item);
    item['key'] = "contact_text3_485710";
    item['en'] = "On tour";
    
    item = {};
    this.items.push(item);
    item['key'] = "concertdetails_textcopy3_644388";
    item['en'] = "Description";
    
    item = {};
    this.items.push(item);
    item['key'] = "concertdetails_textcopy4_463964";
    item['en'] = "(venue)";
    
    item = {};
    this.items.push(item);
    item['key'] = "biblioteca_text_14967";
    item['en'] = "Biblioteca\n";
    
    item = {};
    this.items.push(item);
    item['key'] = "pizarron_text_376514";
    item['en'] = "Pizarron";
    
    item = {};
    this.items.push(item);
    item['key'] = "calendario_text_722344";
    item['en'] = "Calendario";
    
    item = {};
    this.items.push(item);
    item['key'] = "usuario_text_600685";
    item['en'] = "Usuario";
    
    item = {};
    this.items.push(item);
    item['key'] = "pizarron2_text_523858";
    item['en'] = "Biblioteca";

    item = {};
    this.items.push(item);
    item['key'] = "login_field_111402";
    item['en'] = "alguien@ejemplo.com";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_fieldcopy_220522";
    item['en'] = "Contraseña";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_checkbox_557734";
    item['en'] = "Recordarme";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_button_42863";
    item['en'] = "Iniciar Sesión";
    
    item = {};
    this.items.push(item);
    item['key'] = "login_buttoncopy_713613";
    item['en'] = "Crear Cuenta";
    
    item = {};
    this.items.push(item);
    item['key'] = "login2_field_36185";
    item['en'] = "Usuario";
    
    item = {};
    this.items.push(item);
    item['key'] = "login2_fieldcopy_180669";
    item['en'] = "Contraseña";
    
    item = {};
    this.items.push(item);
    item['key'] = "login2_checkbox_718581";
    item['en'] = "Recordarme";
    
    item = {};
    this.items.push(item);
    item['key'] = "login2_button_863024";
    item['en'] = "Iniciar Sesión";
    
    item = {};
    this.items.push(item);
    item['key'] = "login2_buttoncopy_397582";
    item['en'] = "Crear Cuenta";
    
    item = {};
    this.items.push(item);
    item['key'] = "crearcuenta_fieldcopy2_67638";
    item['en'] = "alguien@ejemplo.com";
    
    item = {};
    this.items.push(item);
    item['key'] = "crearcuenta_fieldcopy2_621361";
    item['en'] = "alguien@ejemplo.com";
    
    let storedItems = localStorage.getItem(this.id);
    if (storedItems != null) {
      this.items = JSON.parse(storedItems);
    }
  }

  addItem(item, options) {
    super.addItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  removeItem(item, options) {
    super.removeItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  replaceItemByRowIndex(idx, newItem, options) {
    super.replaceItemByRowIndex(idx, newItem, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
