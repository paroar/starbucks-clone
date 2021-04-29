import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from '../components/jumbotron';

const JumbotronContainer = () => (
  <Jumbotron>
    <Jumbotron.Group>
      <Jumbotron.Frame bgColor="#d4e9e2" color="#1e3932">
        <Jumbotron.Info>
          <Jumbotron.Text>
            We require facial coverings in all stores to
            protect the health of our customers and partners (employees),
            and help stop the spread of COVID-19.&ensp;
            <Link href="/">Learn more</Link>
          </Jumbotron.Text>
        </Jumbotron.Info>
      </Jumbotron.Frame>
    </Jumbotron.Group>

    <Jumbotron.Group>
      <Jumbotron.Frame bgColor="#d4e9e2" color="#006241">
        <Jumbotron.Item>
          <Jumbotron.Image src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70087.png" alt="" />
        </Jumbotron.Item>
        <Jumbotron.Item>
          <Jumbotron.Info>
            <Jumbotron.SubTitle>
              We’re celebrating Earth Month with a new game—play for a chance to
              win the grand prizes, Bonus Stars, free drinks and more.*
            </Jumbotron.SubTitle>
            <Jumbotron.Button color="#006241">Let&apos;s play</Jumbotron.Button>
          </Jumbotron.Info>
        </Jumbotron.Item>
      </Jumbotron.Frame>
    </Jumbotron.Group>

    <Jumbotron.Group>
      <Jumbotron.Frame bgColor="#f2f0eb" color="#1e3932" direction="row-reverse">
        <Jumbotron.Item>
          <Jumbotron.Image src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70757.png" alt="" />
        </Jumbotron.Item>
        <Jumbotron.Item>
          <Jumbotron.Info>
            <Jumbotron.Title>FEEL-GOOD FLAVORS</Jumbotron.Title>
            <Jumbotron.SubTitle>
              Our Kale & Portabella Mushroom Sous Vide Egg Bites
              and Southwest Veggie Wrap made for satisfying mornings.
            </Jumbotron.SubTitle>
            <Jumbotron.Button color="#1e3932">Order hot breakfast</Jumbotron.Button>
          </Jumbotron.Info>
        </Jumbotron.Item>
      </Jumbotron.Frame>
    </Jumbotron.Group>

    <Jumbotron.Group>
      <Jumbotron.Frame color="#1e3932">
        <Jumbotron.Item>
          <Jumbotron.Info>
            <Jumbotron.Title>MORE WAYS TO DISCOVER</Jumbotron.Title>
          </Jumbotron.Info>
        </Jumbotron.Item>
      </Jumbotron.Frame>
    </Jumbotron.Group>

    <Jumbotron.FeatureGroup>
      <Jumbotron.Feature bgColor="#d4e9e2" color="#1e3932">
        <Jumbotron.Image src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70203.jpg" alt="" />
        <Jumbotron.FeatureItem>
          <Jumbotron.Info>
            <Jumbotron.SubTitle>
              Order and pick up. Easy as that.
            </Jumbotron.SubTitle>
            <Jumbotron.Text>
              Just open the app, order your favorites, and enjoy contactless pay.
              From there, choose whichever pickup method is best for you.
            </Jumbotron.Text>
            <Jumbotron.Button color="#1e3932">See pickup options</Jumbotron.Button>
          </Jumbotron.Info>
        </Jumbotron.FeatureItem>
      </Jumbotron.Feature>

      <Jumbotron.Feature bgColor="#f2f0eb" color="#1e3932">
        <Jumbotron.Image src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70878.jpg" alt="" />
        <Jumbotron.FeatureItem>
          <Jumbotron.Info>
            <Jumbotron.SubTitle>
              Earning 4,500 Bonus Stars is Super Starifying
            </Jumbotron.SubTitle>
            <Jumbotron.Text>
              With a $0 intro annual fee for your first year,
              earn more Stars and even more Rewards with the Starbucks® Rewards Visa® Card. **
            </Jumbotron.Text>
            <Jumbotron.Button color="#1e3932">Learn more</Jumbotron.Button>
          </Jumbotron.Info>
        </Jumbotron.FeatureItem>
      </Jumbotron.Feature>
    </Jumbotron.FeatureGroup>

    <Jumbotron.Group>
      <Jumbotron.Frame bgColor="#f2f0eb" color="#1e3932">
        <Jumbotron.Item>
          <Jumbotron.Image src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-69199.jpg" alt="" />
        </Jumbotron.Item>
        <Jumbotron.Item>
          <Jumbotron.Info>
            <Jumbotron.Title>SPRING CHEER IS HERE</Jumbotron.Title>
            <Jumbotron.SubTitle>
              A Starbucks® delivery on Uber Eats will brighten up any day.***
            </Jumbotron.SubTitle>
            <Jumbotron.Button color="#1e3932">Order now</Jumbotron.Button>
          </Jumbotron.Info>
        </Jumbotron.Item>
      </Jumbotron.Frame>
    </Jumbotron.Group>

    <Jumbotron.Group>
      <Jumbotron.Frame bgColor="#d4e9e2" color="#1e3932" direction="row-reverse">
        <Jumbotron.Item>
          <Jumbotron.Image src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70519.jpeg" alt="" />
        </Jumbotron.Item>
        <Jumbotron.Item>
          <Jumbotron.Info>
            <Jumbotron.SubTitle>
              Working to become resource positive
            </Jumbotron.SubTitle>
            <Jumbotron.Text>
              Stay up to date with what we’re doing to become a resource-positive company,
              giving back more than we take from the planet.
            </Jumbotron.Text>
            <Jumbotron.Button color="#1e3932">Learn more</Jumbotron.Button>
          </Jumbotron.Info>
        </Jumbotron.Item>
      </Jumbotron.Frame>
    </Jumbotron.Group>

    <Jumbotron.Group>
      <Jumbotron.Info>
        <Jumbotron.Text>
          *NO PURCHASE NECESSARY. LEGAL RESIDENTS OF THE 50 UNITED STATES (D.C.)
          18 AND OLDER AND WHO ARE MEMBERS OF THE STARBUCKS®
          REWARDS LOYALTY PROGRAM AT THE TIME OF ENTRY. VOID WHERE PROHIBITED.
          Participating stores only. Promotion ends 4/30/21.
          For Official Rules, how to enter without purchase, prizes, and odds, visit&ensp;
          <Link href="https://www.starbucksearthmonthgame.com">https://www.starbucksearthmonthgame.com</Link>
          . Sponsor: Starbucks Corporation, 2401 Utah Ave. S, Seattle, WA 98134.
          “Nondairy Drinks for a Year” means the winner will receive a daily credit for one
          year for one free standard menu-sized handcrafted beverage that can be customized
          with nondairy add-in. Credits are redeemable at a participating Starbucks store.
          Ready-to-drink, bottled, and alcoholic beverages are excluded.
          Credits are non-transferable and expire within 24 hours.
          Entrants can receive a maximum of 2 plays per day, plus,
          bonus opportunities to earn additional plays.
          Game plays may be earned on eligible transactions at a participating Starbucks store.
          You must pay with your Starbucks Card or linked payment method, or by scanning your
          Starbucks App prior to checkout. Purchases of alcohol, Starbucks Cards and Starbucks
          Card reloads are excluded. See&ensp;
          <Link href="/">starbucks.com/terms</Link>
          &ensp;or details.
        </Jumbotron.Text>
      </Jumbotron.Info>
    </Jumbotron.Group>

    <Jumbotron.Group>
      <Jumbotron.Info>
        <Jumbotron.Text>
          **Earn 1 (one) Star for every $2 or a ½ (half) Star for every $1 you spend when you
          use PayPal to reload your Starbucks Card or earn 1 (one) extra Star for every
          $2 or an extra ½ (half) Star for every $1 spent when you pay directly with
          PayPal at participating Starbucks stores. Offer valid 4/1 - 4/30/2021.
          Stars cannot be earned on purchases of alcohol or Starbucks Cards.
          For details about Starbucks Rewards, including earn rates, visit&ensp;
          <Link href="/">starbucks.com/rewards</Link>
          . Starbucks and PayPal reserve the right to cancel, extend,
          suspend or modify this Offer in part or in its entirety at any time without notice,
          for any reason in their sole discretion.
        </Jumbotron.Text>
      </Jumbotron.Info>
    </Jumbotron.Group>

    <Jumbotron.Group>
      <Jumbotron.Info>
        <Jumbotron.Text>
          ***Menu limited. Restricted delivery area. Available in participating locations only.
          Prices for Starbucks® Infos purchased through Uber Eats may be higher than posted
          in stores or as marked. See the Uber Eats app for details.
          Small-order fee may apply.
        </Jumbotron.Text>
      </Jumbotron.Info>
    </Jumbotron.Group>

  </Jumbotron>
);

export default JumbotronContainer;
