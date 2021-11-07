import Head from 'next/head';
import Layout from "../../components/layout/layout";
import styles from './supporter.module.css';
import {useRouter} from "next/router";

export default function Supports() {
  const router = useRouter()
  const plans = [
    {
      name: "Monthly",
      amount: 9.99,
      billed: "monthly"
    },
    {
      name: "Quarterly",
      amount: 8.99,
      savings: 10,
      billed: "quarterly"
    },
    {
      name: "Yearly",
      amount: 7.99,
      savings: 20,
      billed: "yearly"
    }
  ];

  const planClicked = (name) => {
    router.push("account/signup");
  }
  return (
    <Layout route="supporter">
      <Head>
        <title>Tales of the Township - Supporter</title>
      </Head>
      <div className={styles.background}/>
      <div className={styles.mainSupporterContainer}>
        <ul className={styles.supporterUl}>
          <li className={styles.supportLi}>750 <img className={styles.supportImage} alt="perk"
                                                   src="https://storage.googleapis.com/alta-launcher/shop/assets/Currency.png"/>s
            every month</li>
          <li className={styles.supportLi}>Exclusive discounts in the shop</li>
          <li className={styles.supportLi}>'Supporter' Discord role</li>
          <li className={styles.supportLi}>Ability to create private server</li>
          <li className={styles.supportLi}>Access to preview server</li>
          <li className={styles.supportLi}>
            <img className={styles.supportImage} alt="perk" src="https://storage.googleapis.com/alta-launcher/shop/assets/Supporter.png"/> in-game
            name icon</li>
          <li className={styles.supportLi}>Username in credits on release</li>
          <li className={styles.supportLi}>Knowledge you helped development!</li>
        </ul>
      </div>
      <div className={styles.plansContainer}>
        {plans.map(plan => (
          <div key={plan.name} onClick={() => planClicked(plan.name)} className={styles.planContainer}>
            <div className={styles.planHeading}>{plan.name}</div>
            {plan.savings && (
              <div className={styles.planSavings}>SAVE {plan.savings}%</div>
            )}
            <div className={styles.planAmount}>${plan.amount}</div>
            <div className={styles.planPer}>per month</div>
            <div className={styles.planBilled}>billed {plan.billed}</div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
