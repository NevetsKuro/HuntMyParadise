import React from 'react';
import styles from '../styles/Landing.module.css';

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
                <button type="button" className={styles.btnn}>
                  View Other Options
                </button>
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
            <div className={styles.hotelName}>
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />

              <h2>JW MARRIOT HOTEL</h2>
              <p>Compimentry Activities,Marriage Halls,Gyms</p>

              <button type="button" className={styles.bookNow}>
                Book Now
              </button>
            </div>

            <div className={styles.hotelName}>
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />

              <h2>GRAND HYAAT</h2>
              <p>Compimentry Activities,Tushar Marriage Halls,Gyms</p>

              <button type="button" className={styles.bookNow}>
                Book Now
              </button>
            </div>
          </div>

          <div className={styles.ratings}>
            <button type="button">4.5</button>
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
