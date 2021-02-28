import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';   

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  msaapDisplayTitle = true;
msaapDisplayPlayList = true;
msaapPageSizeOptions = [2,4,6];
msaapDisplayVolumeControls = true;
msaapDisplayRepeatControls = true;
msaapDisplayArtist = true;
msaapDisplayDuration = true;
msaapDisablePositionSlider = false;

  msaapPlaylist: Track[] = [
  {
    title: 'Podcast 1',
    link: 'https://firebasestorage.googleapis.com/v0/b/teoria-computacional.appspot.com/o/podcast_luz.mp3?alt=media&token=340adeb6-d4cf-46c4-9d2e-5a3bd6823fda',
    artist: 'Audio One Artist',
    duration: 180
  },
  {
    title: 'Podcast 2',
    link: 'https://storage.googleapis.com/videosdiegosolorzano/CortexA.mp4',
    artist: 'Audio Two Artist',
    duration: 180
  },
  {
    title: 'Podcast 3',
    link: 'https://firebasestorage.googleapis.com/v0/b/teoria-computacional.appspot.com/o/podcast_luz.mp3?alt=media&token=340adeb6-d4cf-46c4-9d2e-5a3bd6823fda',
    artist: 'Audio Three Artist',
    duration: 180
  },
];

}



   
