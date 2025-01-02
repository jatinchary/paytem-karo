import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Balance = () => {
    const [balance, setBalance] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/api/v1/account/balance', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setBalance(response.data.balance);
            } catch (error) {
                console.error('Error fetching balance:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBalance();
    }, []);

    if (loading) {
        return (
            <div className="flex">
                <div className="font-bold text-lg">
                    Your balance
                </div>
                <div className="animate-pulse ml-4 h-7 w-24 bg-slate-200 rounded"></div>
            </div>
        );
    }

    return (
        <div className="flex">
            <div className="font-bold text-lg">
                Your balance
            </div>
            <div className="font-semibold ml-4 text-lg">
                Rs {balance?.toFixed(2) || 0}
            </div>
        </div>
    );
};

export default Balance;