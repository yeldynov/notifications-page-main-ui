export default function Header() {
  return (
    <header className='flex gap-5 justify-between items-center mb-2'>
      <div className='flex gap-2 text-xl font-bold'>
        <h1>Notifications</h1>
        <span className='rounded-md text-c-white bg-c-blue px-3'>3</span>
      </div>
      <h3 className='text-sm text-c-dark-grayish-blue hover:text-c-blue hover:cursor-pointer'>Mark all as read</h3>
    </header>
  );
}
