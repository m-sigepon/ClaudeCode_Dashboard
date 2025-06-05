import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function GET() {
  try {
    // Pin ccusage version for security
    const { stdout } = await execAsync('npx ccusage@0.4.2 daily --json --mode auto');
    const data = JSON.parse(stdout);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching usage data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch usage data' },
      { status: 500 }
    );
  }
}