print ("Loading")
print ("detecting discord.py")
print ("Welcome Back, Tron Tutorial GT")
print ("Bot Server Made By Tron Tutorial GT")
print ("Starting Bot...")
print (" ")
import discord
from discord.ext import commands
import asyncio
import youtube_dl
discord.__version__
'1.0.0a'
 
bot = commands.Bot(command_prefix='c!')
 
@bot.event
async def on_ready():
    print ('Actived Bot Has Online')
    print ('Bot.Py Started!')
    print (bot.user.id)
    print (bot.user.name)
    await bot.change_presence(game=discord.Game(name="Tron_Bot | c!help"))
   	
    
@bot.command(pass_content=True)
async def join(ctx):
	channel = ctx.message.author.voice.voice_channel
	await bot.join_voice_channel(channel)
	
@bot.command(pass_content=True)
async def leave(ctx):
	server = ctx.message.server
	voice_bot = bot.voice_bot_in(server)
	await voice_bot.disconnect()


@bot.command(pass_content=True)
async def clear(ctx, amount = 100):
	await bot.say ('deleted')
	channel = ctx.message.channel
	messages = [ ]
	async for message in bot.logs_from(channel, limit=int(amount)):
		messages.append(message)
		await bot.delete_messages(messages)
    
	
@bot.command()
async def news():
	await bot.say ('Update Command! for Owner')

@bot.command()
async def id():
	await bot.say ('https://wombat.platymuus.com/growtopia/itemdb.php')
	

@bot.command()
async def findworld(type):
	await bot.say('https://growtopiagame.com/worlds/'f'{type}.png')
	
@bot.command() 
async def ban(type):
	await bot.say('Discord_Banned:['f'{type}] Reason: Breaking Many ***Rules***')
	

bot.remove_command('help')

@bot.command(pass_context=True)


async def help(ctx):


    embed = discord.Embed(title="Command_Bot_Prefox is c!.) ", description="Subscribe Tron Tutorial GT", color=0xD1F1EA)
    
    embed.add_field(name="Commands", value="`findworld, say, id, news`")


    embed.set_thumbnail(url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT18pShpmjdiKM5hOY6MR1l0ePONDq93w5WI09DurQm1venN1Vm")


    await bot.say(embed=embed)
    
@bot.command()
async def say(*args):
        output = ''
        for word in args:
            output += word
            output += ' '
        await bot.say(output)


@bot.command(pass_context=True)
async def serverinfo(ctx, user: discord.Member):
    embed = discord.Embed(title="{}'s info".format(user.name), description="Here's what I could find.", color=0x00ff00)
    embed.add_field(name="Name", value=user.name, inline=True)
    embed.add_field(name="ID", value=user.id, inline=True)
    embed.add_field(name="Status", value=user.status, inline=True)
    embed.add_field(name="Highest role", value=user.top_role)
    embed.add_field(name="Joined", value=user.joined_at)
    embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/514710509417922571/516281669666209792/1543161490790.png")
    await bot.say(embed=embed)

bot.run('NTM4OTc3MjY3MTk2NjI0ODk2.DzgSuQ.UzDj_6D0G7FgJAfLFzjO1I2b5s4')