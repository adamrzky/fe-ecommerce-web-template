"use client";
import MainLayout from "@/components/MainLayout";
import Menu from "@/components/account/Menu";
import { useAuthStore } from "@/store/authStore";
import axios from "axios";
import { useEffect, useState } from "react";
import "./transactions.css";

const MyTransactions = () => {
  const { user } = useAuthStore();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/mytransactions`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setTransactions(response.data.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, [user.token]);

  return (
    <MainLayout>
      <section className="mx-auto max-w-[1320px] my-8 px-10 xl:px-0 flex flex-col xl:flex-row">
        <Menu />
        <div className="flex-1 overflow-x-auto mt-10 xl:mt-0">
          <h1>My Transactions</h1>
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Product Name</th>
                <th>Total</th>
                <th>Payment Type</th>
                <th>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.ID}>
                  <td>{transaction.TRX_ID}</td>
                  <td>{transaction.Product.Name}</td>
                  <td>Rp {transaction.TOTAL.toLocaleString()}</td>
                  <td>{transaction.PAY_TYPE}</td>
                  <td>{transaction.pay_DATE || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </MainLayout>
  );
};

export default MyTransactions;
