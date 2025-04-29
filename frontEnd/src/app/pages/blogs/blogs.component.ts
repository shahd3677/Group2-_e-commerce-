import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  standalone: false,

  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  title: string = "Our Blog Post"
  imgSection: string = "";
  [x: string]: any;
  blogPosts = [
    {
      title: 'Unique Restaurant Furniture',
      author: 'Nikolus',
      date: 'July 31, 2022',
      excerpt: 'Provide best quality of modern furniture which Return policy for all of our customer most popular furnitur',
      image: 'https://cdn.prod.website-files.com/62d3e80a683aff1e46a03314/62e7aceb5864404a43a33e3b_07.png',
      slug: 'unique-restaurant-furniture'
    },
    {
      title: 'Latest Furniture Technology',
      author: 'Martin',
      date: 'July 31, 2022',
      excerpt: 'Provide best quality of modern furniture which Return policy for all of our customer most popular furnitur',
      image: 'https://cdn.prod.website-files.com/62d3e80a683aff1e46a03314/62e7acd3c26ff2a5e7442c13_06.png',
      slug: 'latest-furniture-technology'
    },
    {
      title: 'Processed Wooden Furniture',
      author: 'Martin',
      date: 'July 31, 2022',
      excerpt: 'Provide best quality of modern furniture which Return policy for all of our customer most popular furnitur',
      image: 'https://cdn.prod.website-files.com/62d3e80a683aff1e46a03314/62e7acb1eddd4e46dae5a753_05.png',
      slug: 'processed-wooden-furniture'
    },
    {
      title: 'Most Popular Types of Sofas-2021',
      author: 'Nikolus',
      date: 'July 31, 2022',
      excerpt: 'Provide best quality of modern furniture which Return policy for all of our customer most popular furnitur',
      image: 'https://cdn.prod.website-files.com/62d3e80a683aff1e46a03314/62e7ac999bf0f400a88a235d_04.png',
      slug: 'most-popular-types-of-sofas-2021'
    },
    {
      title: 'Identify Quality Home Furnishings',
      author: 'Martin',
      date: 'July 31, 2022',
      excerpt: 'Provide best quality of modern furniture which Return policy for all of our customer most popular furnitur',
      image: 'https://cdn.prod.website-files.com/62d3e80a683aff1e46a03314/62e7ac7fc26ff23fc04422ae_03.png',
      slug: 'identify-quality-home-furnishings'
    },
    {
      title: 'New Stylish Storage Cabinet',
      author: 'Nikolus',
      date: 'July 31, 2022',
      excerpt: 'Provide best quality of modern furniture which Return policy for all of our customer most popular furnitur',
      image: 'https://cdn.prod.website-files.com/62d3e80a683aff1e46a03314/62e7ac6400baab1d77937f24_02.png',
      slug: 'new-stylish-storage-cabinet'
    }
  ];
}
