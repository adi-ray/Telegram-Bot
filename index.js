const axios = require('axios');
const { Telegraf } = require('telegraf');

let binarysearch = `
// Java implementation of iterative Binary Search

import java.io.*;

class BinarySearch {

	// Returns index of x if it is present in arr[].
	int binarySearch(int arr[], int x)
	{
		int l = 0, r = arr.length - 1;
		while (l <= r) {
			int m = l + (r - l) / 2;

			// Check if x is present at mid
			if (arr[m] == x)
				return m;

			// If x greater, ignore left half
			if (arr[m] < x)
				l = m + 1;

			// If x is smaller, ignore right half
			else
				r = m - 1;
		}

		// If we reach here, then element was
		// not present
		return -1;
	}

	// Driver code
	public static void main(String args[])
	{
		BinarySearch ob = new BinarySearch();
		int arr[] = { 2, 3, 4, 10, 40 };
		int n = arr.length;
		int x = 10;
		int result = ob.binarySearch(arr, x);
		if (result == -1)
			System.out.println(
				"Element is not present in array");
		else
			System.out.println("Element is present at "
							+ "index " + result);
	}
}

`;

const bot = new Telegraf('6500890476:AAEVpStAVZoHZnV0Zra84rBzKKfmbW0in00');

bot.start((ctx) => ctx.reply('Welcome to the coding bot from Aditya !!!'));

bot.command('binarysearchjs', (ctx) => ctx.reply(binarysearch));
bot.command('whomadethis', (ctx) => ctx.reply('Aditya Ray'));

bot.command('commands', async function (ctx) {
    const response = await axios.get('https://raw.githubusercontent.com/adi-ray/GDSC_Workshop_materials/main/linux-commands.md');
    //console.log(response.data);
    
    return ctx.reply(response.data);
});

bot.on('sticker', (ctx) => ctx.reply('🛐'));

bot.launch();