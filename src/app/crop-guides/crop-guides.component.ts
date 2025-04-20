import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crop-guides',
  imports: [CommonModule],
  templateUrl: './crop-guides.component.html',
  styleUrl: './crop-guides.component.css'
})
export class CropGuidesComponent {

  crops = [
    {
      name: 'ধান (Rice)',
      image: 'dhan.png',
      shortGuide: 'ধানের ভালো ফলনের জন্য সঠিক সময়ে বপন ও পর্যাপ্ত সেচ প্রয়োজন।',
      tips: [
        'বপনের পূর্বে বীজ শোধন করা উচিত।',
        'পানির স্তর ঠিক রাখুন।',
        'নির্ধারিত সময় অন্তর আগাছা পরিষ্কার করুন।',
        'নাইট্রোজেন ও ফসফরাস সার ব্যবহার করুন।'
      ],
      showMore: false
    },
    {
      name: 'গম (Wheat)',
      image: 'gom.png',
      shortGuide: 'গমের ক্ষেত্রে পানি ও সার ব্যবস্থাপনা সঠিক হলে ফলন অনেক ভালো হয়।',
      tips: [
        'গমের জন্য ভাল ড্রেনেজ ব্যবস্থা নিশ্চিত করুন।',
        'প্রতিবার সেচের পর হালকা গুঁড়ি দিন।',
        'বালাই নিয়ন্ত্রণে নিয়মিত মনিটরিং করুন।'
      ],
      showMore: false
    },
    {
      name: 'সবজি (Vegetables)',
      image: 'sobji.jpg',
      shortGuide: 'সবজি চাষে পোকামাকড় নিয়ন্ত্রণ খুব গুরুত্বপূর্ণ।',
      tips: [
        'প্রাকৃতিক কীটনাশক ব্যবহার করুন।',
        'ফুল ও পাতা পচে গেলে তা কেটে ফেলুন।',
        'ধাপে ধাপে সার প্রয়োগ করুন।'
      ],
      showMore: false
    }
  ];

}
