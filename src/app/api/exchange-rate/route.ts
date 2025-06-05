import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date') || new Date().toISOString().split('T')[0];
    
    // Using a different free exchange rate API that supports latest rates
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rate');
    }
    
    const data = await response.json();
    const usdToJpy = data.rates?.JPY || 150; // fallback rate
    
    return NextResponse.json({
      date,
      rate: usdToJpy
    });
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    // Fallback to approximate rate
    return NextResponse.json({
      date: new Date().toISOString().split('T')[0],
      rate: 150
    });
  }
}