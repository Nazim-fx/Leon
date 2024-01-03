module.exports = {
  command: 'poll',
  info: 'Creates a poll from given title and options.',
  func: async (sock, msg, text) => {
    if (!text) return await msg.reply({ text: '*Please enter the title and options by splitting with | symbol!*\n\n*Example:*\n*- ' + (process.env?.PREFIX || '/') + 'poll title|option1|option2|option3' });
    await msg.reply({ poll: { title: text.split('|')[0], options: text.split('|').slice(1) } });
  }
};
