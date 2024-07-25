import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'My Blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Hackers Fund Blog</h1>
      <BlogPosts />
    </section>
  )
}
