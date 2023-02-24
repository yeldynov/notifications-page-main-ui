import Header from './components/Header';
import AvatarMark from './assets/avatar-mark-webber.webp';
import AvatarAngela from './assets/avatar-angela-gray.webp';
import AvatarJacob from './assets/avatar-jacob-thompson.webp';
import AvatarRizky from './assets/avatar-rizky-hasanuddin.webp';
import AvatarKim from './assets/avatar-kimberly-smith.webp';
import AvatarMathan from './assets/avatar-nathan-peterson.webp';
import AvatarAnna from './assets/avatar-anna-kim.webp';
import ChessPic from './assets/image-chess.webp';

function App() {
  return (
    <div className='flex flex-col min-h-screen desk:justify-center items-center desk:bg-c-light-grayish-blue'>
      <div className='my-5 mx-4 desk:max-w-[50%] desk:bg-c-white desk:rounded-xl desk:px-10 desk:py-5 '>
        <main className='flex flex-col gap-2'>
          <Header />
          <article className='flex flex-col p-2 bg-c-very-light-grayish-blue'>
            <div className='flex justify-start gap-5 items-start'>
              <img className='w-12' src={AvatarMark} alt='Mark Webber' />
              <div>
                <p className='text-sm text-c-dark-grayish-blue leading-[5px]'>
                  <span className='font-bold hover:text-c-blue hover:cursor-pointer text-c-very-dark-blue'>
                    Mark Webber
                  </span>{' '}
                  reacted to your recent post{'  '}
                  <span className='text-c-dark-grayish-blue hover:text-c-blue cursor-pointer font-bold'>
                    My first tournament today!
                  </span>
                  <span className='text-c-red text-xl'> ●</span>
                </p>
                <div className='text-c-grayish-blue text-sm'>1m ago</div>
              </div>
            </div>
          </article>
          <article className='flex flex-col p-3 bg-c-very-light-grayish-blue'>
            <div className='flex justify-start gap-5 items-start'>
              <img className='w-12' src={AvatarAngela} alt='Angela Gray' />
              <div>
                <p className='text-sm text-c-dark-grayish-blue leading-[5px]'>
                  <span className='font-bold hover:text-c-blue hover:cursor-pointer text-c-very-dark-blue'>
                    Angela Gray
                  </span>{' '}
                  followed you
                  <span className='text-c-red text-xl'> ●</span>
                </p>
                <div className='text-c-grayish-blue text-sm'>5m ago</div>
              </div>
            </div>
          </article>
          <article className='flex flex-col p-3 bg-c-very-light-grayish-blue'>
            <div className='flex justify-start gap-5 items-start'>
              <img className='w-12' src={AvatarJacob} alt='Jacob Thompson' />
              <div>
                <p className='text-sm text-c-dark-grayish-blue leading-[5px]'>
                  <span className='font-bold hover:text-c-blue hover:cursor-pointer text-c-very-dark-blue'>
                    Jacob Thompson
                  </span>{' '}
                  has joined your group{'  '}
                  <span className='text-c-blue font-bold'>Chess Club</span>
                  <span className='text-c-red text-xl'> ●</span>
                </p>
                <div className='text-c-grayish-blue text-sm'>1 day ago</div>
              </div>
            </div>
          </article>
          <article className='flex flex-col p-3'>
            <div className='flex gap-5 items-start'>
              <img className='w-12' src={AvatarRizky} alt='Rizky Hasanuddin' />
              <div>
                <p className='text-sm text-c-dark-grayish-blue'>
                  <span className='font-bold hover:text-c-blue hover:cursor-pointer text-c-very-dark-blue'>
                    Rizky Hasanuddin
                  </span>{' '}
                  send you a private message{' '}
                </p>
                <div className='text-c-grayish-blue text-sm'>5 days ago</div>
                <div className=' border rounded-md hover:bg-c-light-grayish-blue cursor-pointer mt-1 p-2'>
                  <p className='text-c-dark-grayish-blue text-sm w-[90%]'>
                    Hello, thanks for setting up the Chess Club. I've been a
                    member for a few weeks now and I'm already having lots of
                    fun and improving my game.
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className='flex p-3 justify-between'>
            <div className='flex gap-5 items-start'>
              <img className='w-12' src={AvatarKim} alt='Kim Smith' />
              <div>
                <p className='text-sm text-c-dark-grayish-blue'>
                  <span className='font-bold hover:text-c-blue hover:cursor-pointer text-c-very-dark-blue'>
                    Kimberly Smith
                  </span>{' '}
                  commented on your picture{' '}
                </p>
                <div className='text-c-grayish-blue text-sm'>1 week ago</div>
              </div>
            </div>
            <div className='rounded-md'>
              <img className='w-14' src={ChessPic} alt='Chess Image' />
            </div>
          </article>
          <article className='flex flex-col p-3 '>
            <div className='flex justify-start gap-5 items-start'>
              <img className='w-12' src={AvatarMathan} alt='Nathan Petterson' />
              <div>
                <p className='text-sm text-c-dark-grayish-blue '>
                  <span className='font-bold hover:text-c-blue hover:cursor-pointer text-c-very-dark-blue'>
                    Nathan Petterson
                  </span>{' '}
                  reacted to your recent post{'  '}
                  <span className='text-c-dark-grayish-blue hover:cursor-pointer hover:text-c-blue font-bold'>
                    5 end-game strategies to increase your win rate
                  </span>
                </p>
                <div className='text-c-grayish-blue text-sm'>2 weeks ago</div>
              </div>
            </div>
          </article>
          <article className='flex flex-col p-3 '>
            <div className='flex justify-start gap-5 items-start'>
              <img className='w-12' src={AvatarAnna} alt='Anna Kim' />
              <div>
                <p className='text-sm text-c-dark-grayish-blue'>
                  <span className='font-bold hover:text-c-blue hover:cursor-pointer text-c-very-dark-blue'>
                    Anna Kim
                  </span>{' '}
                  left the group{'  '}
                  <span className='text-c-blue font-bold hover:cursor-pointer hover:text-c-blue'>Chess Club</span>
                </p>
                <div className='text-c-grayish-blue text-sm'>2 weeks ago</div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}

export default App;
