import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deleteReservation from '../../redux/my_reservations/actions/deleteReservation';
import fetchMyReservations from '../../redux/my_reservations/actions/fetchMyReservations';
import { selectUserId } from '../../redux/user/userSlice.js';
import { formatDistanceToNow } from 'date-fns';

function MyReservations() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.myReservations.reservations);
  const userId = useSelector(selectUserId);

  useEffect(() => {
    dispatch(fetchMyReservations(userId));
  }, [dispatch, userId]);

  const handleDelete = (userId, reservationId) => {
    dispatch(deleteReservation({ user_id: userId, reservation_id: reservationId }));
  };

  let flexDirection = String.new;
  const backgroundColors = ['lime-green', 'golden-yellow', 'turquoise-blue', 'charcoal-gray'];

  return (
    <section
      id="my-reservations"
      className="flex items-center justify-center lg:ml-[15%] bg-center py-20"
    >
      <div className="w-[100%] md:px-40 xl:px-80 md:py-20">
        {reservations.length === 0 ? (
          <div className="text-center">
            You haven&apos;t registered any visit yet. <br /> Be brave. Make one.
          </div>
        ) : (
          reservations.map((reservation, index) => {
            if (index % 2 === 0) {
              flexDirection = 'flex-row-reverse';
            } else {
              flexDirection = 'flex-row';
            }

            return (
              <div
                className={`flex ${flexDirection} bg-${backgroundColors[reservation.id % 4]}`}
                key={reservation.id}
              >
                <div
                  className="w-[50%] aspect-square"
                  style={{
                    backgroundImage: `url(${reservation.place.image_url})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                ></div>
                <div
                  className={`bg-${
                    backgroundColors[index % 4]
                  } dialog-triangle w-[50%] text-white flex flex-col items-center justify-center p-4 gap-2`}
                >
                  <h1 className="text-center secondary-font font-bold text-xl">
                    {reservation.place.name}
                  </h1>
                  <h2 className="text-center">{reservation.place.city.name}</h2>
                  <h3 className="text-center italic">
                    {formatDistanceToNow(new Date(reservation.schedule_date), {
                      addSuffix: true,
                    })}
                  </h3>

                  <div
                    className="cursor-pointer aspect-square p-2 border-white border-2 rounded-full"
                    onClick={() => handleDelete(userId, reservation.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}

export default MyReservations;
