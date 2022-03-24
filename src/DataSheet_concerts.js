// eslint-disable-next-line
import React from 'react';
import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_concerts extends DataSheetBase {

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
    item['venue'] = "Openlane";
    item['city'] = "New York City";
    item['price'] = "75";
    item['description'] = "Music fan. Alcohol enthusiast. Creator. Devoted social media geek. Total analyst. Coffee lover.";
    item['date'] = "25 January 2005";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['venue'] = "Yearin";
    item['city'] = "Los Angeles";
    item['price'] = "49\n";
    item['description'] = "Beer junkie. Coffee maven. Avid alcohol lover. Twitter expert. Lifelong tv ninja.";
    item['date'] = "15 September 1992";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['venue'] = "Goodsilron";
    item['city'] = "Beijing";
    item['price'] = "98";
    item['description'] = "Creator. Passionate tv nerd. Problem solver. Proud alcohol evangelist. Lifelong web junkie.";
    item['date'] = "03 May 2006";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['venue'] = "Condax";
    item['city'] = "Delhi";
    item['price'] = "67";
    item['description'] = "Coffee maven. Unapologetic social media advocate. Analyst. Tv trailblazer. Zombie geek. Twitter aficionado. Reader.";
    item['date'] = "30 July 1987";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['venue'] = "Opentech";
    item['city'] = "Shanghai";
    item['price'] = "99";
    item['description'] = "Wannabe internet trailblazer. Devoted coffee scholar. Lifelong web evangelist. Zombie guru. Introvert. Certified music fanatic.";
    item['date'] = "28 April 2010";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['venue'] = "Golddex";
    item['city'] = "Paris";
    item['price'] = "109";
    item['description'] = "Typical creator. Bacon guru. Zombie advocate. Gamer. Social media fanatic. Student.";
    item['date'] = "15 November 1986";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['venue'] = "year-job";
    item['city'] = "Istanbul";
    item['price'] = "67";
    item['description'] = "Infuriatingly humble web geek. Coffee practitioner. Prone to fits of apathy. Thinker. Internet evangelist. Alcoholaholic. Music aficionado.";
    item['date'] = "09 May 2008";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['venue'] = "Isdom";
    item['city'] = "Tokyo";
    item['price'] = "34";
    item['description'] = "Infuriatingly humble web fanatic. Bacon fan. Troublemaker. Certified organizer. Internet junkie. Travel trailblazer.";
    item['date'] = "03 October 1973";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['venue'] = "Gogozoom";
    item['city'] = "Guangzhou";
    item['price'] = "99";
    item['description'] = "Unapologetic travel nerd. Professional entrepreneur. Explorer. Bacon buff. Proud communicator. Introvert. Avid writer.";
    item['date'] = "08 July 1996";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['venue'] = "Stadium";
    item['city'] = "Mumbai";
    item['price'] = "89";
    item['description'] = "Web scholar. Introvert. Explorer. Hardcore thinker. Devoted social media fan. Wannabe reader.";
    item['date'] = "11 September 1982";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['venue'] = "Nam-zim";
    item['city'] = "Moscow";
    item['price'] = "79";
    item['description'] = "Typical thinker. Incurable tv geek. Explorer. Friend of animals everywhere. Entrepreneur.";
    item['date'] = "02 December 1984";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['venue'] = "Donquadtech";
    item['city'] = "São Paulo";
    item['price'] = "50";
    item['description'] = "Proud music junkie. Unapologetic twitter trailblazer. Pop culture lover. Evil internet practitioner.";
    item['date'] = "19 January 2009";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['venue'] = "Warephase";
    item['city'] = "Shenzhen";
    item['price'] = "49";
    item['description'] = "Music maven. Subtly charming bacon evangelist. Coffee guru. Twitter junkie. Lifelong travel ninja.";
    item['date'] = "14 September 1986";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['venue'] = "Donware";
    item['city'] = "Jakarta";
    item['price'] = "120";
    item['description'] = "Pop culture guru. Twitter fanatic. Certified reader. Introvert. Friend of animals everywhere. Entrepreneur. Tv scholar.";
    item['date'] = "08 November 2014";
    item.key = key++;
  }

}
