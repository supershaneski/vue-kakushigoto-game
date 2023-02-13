vue-kakushigoto-game
===========

This is a sample card game application built using [Vue 3](https://vuejs.org/guide/quick-start.html) in `Vite`.

It is intended to be an `idle game` that one can play anywhere, even inside of crowded train or bus, just to while away the time. Or perhaps you are just plain bored. Like they say, ***"an idle mind or brain should be stimulated and play idle games"***, lol.

---
これはViteでVue 3を使用して構築されたサンプルWebゲームアプリケーションです。

これは、混雑した列車やバスの中でも、ただ時間をつぶすためにどこででも遊べる`アイドルゲーム`を意図しています。あるいは単に退屈なだけかもしれません。`「アイドルマインドは刺激すべきで、アイドルゲームをプレイすべき」`という言い方がありますね、笑。


# The Game

In Japanese, `kakushigoto` [かくしごと] means hidden work.
It is common to find words playfully re-written where they use numbers that corresponds to the sound of the syllables. In this case, `kaku`-`shi`-`go`-`to` becomes `kaku`-`4`-`5`-`10` or `カク4510`. So this game revolves around the numbers 4, 5 and 10.

---
日本語では「かくしごと」は隠し仕事を意味します。
音節の数字に対応した単語を冗談っぽく書き換えることが一般的です。この場合、「かく」-「し」-「ご」-「と」は「かく」-「4」-「5」-「10」または「カク4510」になります。つまり、このゲームは4、5、10の番号を回すものです。


## Mechanics

* There are two players: human (you) vs computer.


* In every round, three cards bearing the number 4, 5, 10 is shown faced down.
  The objective is to get the highest number card.


* The human will first pick a card and it will be immediately revealed.
  * If 10 is selected, the human player wins the round.
  * If 4 is selected, the human player loses the round.
  * If 5 is selected, the computer will select one card from the remaining.
  
    Whoever gets the higher card wins the round.


* At the start of the game, both players have 1000 tokens each.
  * If you win, 5 tokens will be deducted to the opposing player and it will be added to you.
  * The player who ended up with zero token loses and then the game ends.

---
* 2つのプレイヤーがいます：人間（あなた） vs コンピューター。

* それぞれのラウンドで、数字4、5、10が記された3枚のカードが裏返しになって表示されます。
  目的は最高の数字カードを入手することです。

* 人間がまずカードを選び、すぐに明らかにされます。
    * 10が選択された場合、人間のプレイヤーが勝ちます。
    * 4が選択された場合、人間のプレイヤーは負けます。
    * 5が選択された場合、コンピューターが残りのカードから1枚選びます。
  
      より高いカードを獲得した人がラウンドに勝ちます。


* ゲーム開始時、両プレイヤーはそれぞれ1000のトークンを持っています。
    * 勝った場合、対戦相手から5のトークンが引かれ、自分に加算されます。
    * トークンが0になったプレイヤーが負け、ゲームが終了します。


# Development

> This is a work in progress. Please visit again next time...

---
> これは進行中の作業で、次回も是非お越しくださいね (^_^)v

<br />
This is part of a series of projects I developed to study `Vue 3`.

I will be using the following modules/library:

* [Storybook](https://storybook.js.org/blog/storybook-vue3/), for building component.
  As someone who adheres to [Component-Driven Development](https://www.componentdriven.org/), I just cannot go without it.

* [Pinia](https://pinia.vuejs.org), for state management. Who can resist the cute yellow face of their mascot?


# Getting Started

Clone the repository and install the dependencies

```sh
$ git clone https://github.com/supershaneski/vue-kakushigoto-game.git myproject

$ cd myproject

$ npm install
```

Then run the app

```sh
$ npm start
```

To launch `Storybook`

```sh
$ npm run storybook
```

Open your browser to `http://localhost:5000/` to load the application

