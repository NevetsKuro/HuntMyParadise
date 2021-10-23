import React from 'react';
import { Star } from 'react-feather';
import styles from '../styles/Landing.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Landing() {
  return (
    <>
      <main className={styles.mainClassName}>
        <section className={styles.leftSection}>
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
            alt="hotel-president"
          />

          <div className={styles.rightSection}>
            <div className={styles.bookedHotel}>
              <div className={styles.flex}>
                <div className={styles.content}>
                  <p className={styles.text}>Price Starts At</p>
                  <p className={styles.price}> &#x20b9; 5000</p>
                  <p className={styles.no}>per room/night</p>

                  <h4>Quick Booking</h4>
                </div>

                <div className={styles.guests}>
                  <p>
                    {' '}
                    <i className="fa fa-guest" /> 2 X Guest
                  </p>
                  <p>
                    {' '}
                    <i className="fa fa-wifi" /> Free Wifi
                  </p>
                  <p>
                    <i className="fa fa-voume" /> 696969
                  </p>
                </div>
              </div>
              <div className={styles.butt}>
                <a href="/Browse">
                  <button type="button" className={styles.btnn}>
                    View Hotels
                  </button>
                </a>
              </div>
            </div>

            <div className={styles.bookedOnMap}>
              <img
                src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg"
                alt="google-ed"
              />
            </div>
          </div>
        </section>

        <section className={styles.secondSection}>
          <div className={styles.hotelLists}>
            {Array(4)
              .fill(1)
              .map((x) => (
                <div key={x} className={styles.hotelName}>
                  {Array(2).fill(<Star size={24} color="#ffff00" />)}
                  {Array(3).fill(<Star size={24} color="#aaa" />)}

                  <h2 className="m-0">JW MARRIOT HOTEL</h2>
                  <em>
                    <b>Amenities: </b>Compimentry Activities, Marriage Halls,
                    Gyms
                  </em>
                  <br />
                  <p>
                    <b>Description: </b>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry s standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged
                  </p>
                  <button type="button" className={styles.bookNow}>
                    Book Now
                  </button>

                  <div className={styles.ratings}>
                    <button type="button">4.5</button>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>

      <footer className={styles.footerMainContainer}>
        <div className={styles.footerContainer}>
          <div className={styles.logo}> </div>
          <div className={styles.listItemsFooter}>
            <ul className={styles.item}>
              <li>Pricing</li>
              <li>Terms and Condition</li>
              <li>Patnership</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
