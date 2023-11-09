const posts = [
    {
      id: 1,
      title: 'POOOWEEEERRR',
      href: '#',
      description:
        'Cong TV, is a Filipino YouTuber, comedian, musician, vlogger, and online streamer. He is known for his comedy videos on YouTube. Velasquez is often also considered one of the top YouTube personalities in the Philippines.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Fitness Challenge', href: '#' },
      author: {
        name: 'Lincoln "CONG" Velasquez',
        role: 'Influencer',
        href: '#',
        imageUrl:
          'https://kreativden.com/wp-content/uploads/2021/05/kreativden-talent-influencer-congtv-02.jpg',
      },
    },
    {
      id: 1,
      title: 'Breathe in, Breathe out',
      href: '#',
      description:
        'Yoga instructor, laughter yoga leader, a passionate fitness advocate and a certified rescue diver',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Instructor', href: '#' },
      author: {
        name: 'Joanne Villablanca',
        role: 'Influencer',
        href: '#',
        imageUrl:
          'https://i.pinimg.com/736x/b6/8f/e4/b68fe45f307a23d677ce0c188561545d.jpg',
      },
    },
    {
      id: 1,
      title: 'Life of an Athlete',
      href: '#',
      description:
        "Filipino volleyball player. She graduated from the Far Eastern University where she took up Business Management. She was also the team captain of the PLDT HOME TVolution women's team that played in the 2014 Asian Women's Club Volleyball Championship.",
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Athlete', href: '#' },
      author: {
        name: 'Rachel Anne Daquis',
        role: 'Pro Player',
        href: '#',
        imageUrl:
          'https://1cms-img.imgix.net/rachel%20daquis%20sep%2024%20from%20pvl.jpg?auto=compress',
      },
    },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  