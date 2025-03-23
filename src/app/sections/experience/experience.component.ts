import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

type Company = {
  name: string;
  url: string;
  duration: string;
  image: string;
  title: string;
}


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './experience.component.html',
  styles: ``
})
export class ExperienceComponent {

  companies: Company[] = [
    {name: 'Whelson Transport', url: 'https://whelson.co.zw/', image: '/images/whelson_logo.jpeg', duration: 'Nov 2024 - Current', title: 'Software Systems Developer'},
    {name: 'TelOne', url: 'https://telone.co.zw', image: '/images/telone_logo.png', duration: 'Aug 2023 - Nov 2024', title: 'Software Developer'},
    {name: 'Alpha Media Holdings', url: 'https://amh.co.zw', image: '/images/amh_logo.png', duration: 'May 2022 - Jul 2023', title: 'Software Developer'},
    // {name: 'Zimbabwe Health Interventions', url: 'https://zhi.org.zw/', image: '/images/zhi_logo.jpg', duration: 'May 2022 - Jul 2023', title: 'IT Assistant'},
    {name: 'iTrack Zimbabwe', url: 'https://itrackzimbabwe.com', image: '/images/itrack_logo.jpg', duration: 'May 2021 - Oct 2021', title: 'Systems Engineer'},
  ];


}
