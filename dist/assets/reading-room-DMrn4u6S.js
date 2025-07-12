import{r as v}from"./header-C588g6rX.js";import{g as i,O as m,C as u,s as b}from"./localStorage-utils-_Sjt_ShB.js";function k(){const e=document.querySelector(".card-back");e.style.position="relative";const n=e.firstElementChild,t=5;for(let r=0;r<t;r++){const a=n.cloneNode();a.style.position="absolute";const o=r*10;a.style.bottom=g(o/2),a.style.right=g(o),r+1===t&&a.classList.add("top"),e.append(a)}}function g(e){return`${e}px`}const j=document.querySelector("section");function W(e){const n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("img"),a=document.createElement("p");n.classList.add("card-container"),t.classList.add("card"),r.src=`/assets/major-arcana/${e.id}.png`,a.textContent=e.name,t.append(r,a),n.append(t);const o=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div");o.classList.add("color-block"),c.classList.add("keywords"),s.classList.add("interpretation"),c.textContent=e.keyWords,s.textContent=e.interpretation,o.addEventListener("click",()=>{if(Number(o.style.opacity))o.style.opacity=0;else{o.style.opacity=1;const h=document.querySelector("#audio-two");h.volume=.07,h.play()}}),o.append(c,s),n.append(o),j.append(n)}const T=[{id:"fool",name:"The Fool",image:"./assets/major-arcana/fool.png",keyWords:`Key Words: Openness, trust; ready to take a risk; courage to stand your 
 ground; freedom, independence; creativity; great potential; possibility to take a quantum leap; listening to the heart's voice.`,interpretation:`Indications: You are ready for a new beginning, perhaps even a quantum 
 leap. Give in, dare to leap, even if fear attempts to hold you back. Trust 
 the voice from within your heart.`,category:"major-arcana"},{id:"magician",name:"The Magician",image:"./assets/major-arcana/magician.png",keyWords:`Key Words: Mercury, communication; playful dealings with all possible 
 forms of communication; flexibility, brilliance.`,interpretation:`Indications: You have at your disposal briliant capabilities which you 
 should share with other people. One important task is to find or create 
 the proper surroundings for your activities.`,category:"major-arcana"},{id:"highpriestess",name:"The High Priestess",image:"./assets/major-arcana/highpriestess.png",keyWords:`Key Words: Moon; access to intuitive powers; healing, independence, 
 inner equilibrium, increased self-confidence.`,interpretation:`Indications: You now have access to intuitive powers. Develop 
 them more fully. Guard your independence!`,category:"major-arcana"},{id:"empress",name:"The Empress",image:"./assets/major-arcana/empress.png",keyWords:`Key Words: Venus; beauty; love; motherliness, femininity; wisdom; 
 connection between spirit and matter; inner and outer wealth.`,interpretation:`Indications: The beauty you see in others which attracts you to them is 
 a beauty you can carry within yourself. You are in the process of unfolding 
 and evolving your femininity. This may be the right time to work through 
 and clarify unresolved mother-conflicts.`,category:"major-arcana"},{id:"emperor",name:"The Emperor",image:"./assets/major-arcana/emperor.png",keyWords:`Key Words: Aries; pioneer, discoverer, leader, initiator; creative wisdom; 
 great leadership qualities; urge for action, adventurousness, new beginnings 
 fatherhood, authority.`,interpretation:`Indications: This is a propitious moment for a change or a new beginning. 
 Trust your own energy and move with it.`,category:"major-arcana"},{id:"hierophant",name:"The Hierophant",image:"./assets/major-arcana/hierophant.png",keyWords:`Key Words: Taurus; spiritual master, teacher, advisor, initiate, inner 
 guide, spiritual father; highest transformation.`,interpretation:`Indications: The search for the Self leads you into spiritual realms. This 
 card can point to a meeting with a spiritual teacher or master. Be open!`,category:"major-arcana"},{id:"lovers",name:"The Lovers",image:"./assets/major-arcana/lovers.png",keyWords:`Key Words: Gemini; love, attraction, approaching, connection, union 
 of opposites through Love; becoming conscious through relationship.`,interpretation:`Indications: Drawing this may indicate a wonderful and exciting 
 love relationship. Current relationships either deepen or end. New methods 
 for personal growth and integration of your own opposing aspects present 
 themselves as you turn toward and interact with a partner or group.`,category:"major-arcana"},{id:"chariot",name:"The Chariot",image:"./assets/major-arcana/chariot.png",keyWords:`Key Words: Cancer; new beginning, change for the good; introspection 
 meditation, spiritual path.`,interpretation:`Indications: The oncoming change promises to lead to a positive phase 
 of your life. Ready yourself, put your affairs in order, examine the 
 possibilities. You will leave much behind.`,category:"major-arcana"},{id:"strength",name:"Strength",image:"./assets/major-arcana/strength.png",keyWords:`Key Words: Leo; passion; multidimensional creativity, talents; strength; 
 integration of animalistic energies; overcoming old fears and conditionings.`,interpretation:`Indications: If you are ready to accept all which you find in yourself, 
 you will be able to move through everything with deep sensitivity, awareness 
 love and understanding.`,category:"major-arcana"},{id:"hermit",name:"The Hermit",image:"./assets/major-arcana/hermit.png",keyWords:`Key Words: Virgo; finding one's own light; going inward; completion, 
 harvest; resting in one's own center; wise guide.`,interpretation:`Indications: Accept your aloneness! Don't concern yourself with people 
 who don't understand you, who would rather see you be a part of the 
 herd. If you should meet a wise leader or teacher, join them.`,category:"major-arcana"},{id:"wheeloffortune",name:"The Wheel of Fortune",image:"./assets/major-arcana/wheeloffortune.png",keyWords:`Key Words: Jupiter; new beginning, expansion, creativity, big break-through; 
 self-realization; unexpected fortune.`,interpretation:`Indications: If no miracles are happening, something is wrong! You 
 stand before the possibility of a great breakthrough! Use the moment!`,category:"major-arcana"},{id:"justice",name:"Justice",image:"./assets/major-arcana/justice.png",keyWords:"Key Words:  Libra; balance, centering, equilibrium; balancing of opposites; justice.",interpretation:`Indications: Pay attention to what situations in your daily life tend to 
 throw you off-balance. Discover the conditions under which you find 
 harmony again. Carry this quality with you more and more as you move 
 through your daily activities.`,category:"major-arcana"},{id:"hangedman",name:"The Hanged Man",image:"./assets/major-arcana/hangedman.png",keyWords:`Key Words: congealed; end of a situation or relationship which is stuck; 
 letting go, giving up, surrendering; learning to see a new way; the 
 necessity of breaking through old behavior patterns.`,interpretation:`Indications: It is now possible for you to recognize where you are stuck 
 and which areas of your life are congealed rather than flowing. There 
 is nothing to do. The mere act of perceiving your daily reality clearly makes 
 transformation possible.`,category:"major-arcana"},{id:"death",name:"Death",image:"./assets/major-arcana/death.png",keyWords:`Key Words: Scorpio; death and resurection; transformation: scorpion, 
 snake, eagle, becoming free of old ensnarements; external changes.`,interpretation:`Indications: You are now ready to make the necessary changes in your 
 life. Accept the pain that may come with the loss of the old.`,category:"major-arcana"},{id:"temperance",name:"Temperance",image:"./assets/major-arcana/temperance.png",keyWords:`Key Words: Sagittarius; unification of opposites, balance, inner change, 
 transformation, alchemy, a quantum leap; creative power.`,interpretation:`Indications: The card Temperance is a challenge to look inward. In this phase of 
 integrating opposites, the transformation process will not tolerate any 
 further impulses or pushes from outside. To find the hidden stone, the 
 diamond, you must look within.`,category:"major-arcana"},{id:"devil",name:"The Devil",image:"./assets/major-arcana/devil.png",keyWords:`Key Words: Capricorn; procreative energy, new vitality; humor; sensuality; 
 sexuality; creative energy; individuality.`,interpretation:`Indications: There may be people who *demonize* you, make you out 
 to be the devil. Meet them with humor and lightness. Accept what Life 
 gives you. Keep your feet on the ground!`,category:"major-arcana"},{id:"tower",name:"The Tower",image:"./assets/major-arcana/tower.png",keyWords:`Key Words: Mars; far-reaching inner transformation; healing; the old is 
 destroyed to make room for the new; spiritual renewal; self-knowledge.`,interpretation:`Indications: You are in the midst of (or are about to enter into) an 
 extremely intensive transformatory process. Whatever is destroyed or 
 shaken within you serves to purify you and make room for something 
 new. Allow it!`,category:"major-arcana"},{id:"star",name:"The Star",image:"./assets/major-arcana/star.png",keyWords:`Key Words: Aquarius; inspiration, crystallization, self-recognition, radiating, 
 clear vision, trust in the self; connection to the universal intelligence.`,interpretation:`Indications: Let your star rise, and stay in contact with the earth. Trust 
 your environment and find ways to let others share in it. You will be 
 tested and recognized by the fruits you bear.`,category:"major-arcana"},{id:"moon",name:"The Moon",image:"./assets/major-arcana/moon.png",keyWords:`Key Words: Pisces; final testing; wrong turns, illusion; burning off karma; 
 interaction or struggle with the subconscious; threshold to new levels of 
 consciousness.`,interpretation:`Indications: You have heard the call of the unknown. You are on the 
 threshold of new experience. Pay attention now to the voice of your 
 heart, and scrutinize calmly and carefully the offers of assistance and 
 guidance you may receive.`,category:"major-arcana"},{id:"sun",name:"The Sun",image:"./assets/major-arcana/sun.png",keyWords:`Key Words: Sun; highly creative energy; awareness; fulfilled love relationship; 
 wisdom, spirituality; transformation.`,interpretation:`Indications: The fulfillment of your wishes is possible here and now. 
 Relax, and give yourself up to the dance. The right partners will find 
 each other.`,category:"major-arcana"},{id:"judgement",name:"Judgement",image:"./assets/major-arcana/judgment.png",keyWords:`Key Words: Highly discriminating or discerning; open to criticism; critical 
 self-analysis.`,interpretation:`Indications: You are being challenged to drop your *worm's eye view* 
 to see things from a higher plane. When you have recognized greater 
 timespans and other contexts (which are increasingly ready 
 to do), you will then tend more and more to observe things in their 
 being-ness: to see free from evaluations.`,category:"major-arcana"},{id:"world",name:"The World",image:"./assets/major-arcana/world.png",keyWords:`Key Words: Saturn; completion, cosmic union; travel liberation from 
 bondage; burning off karma.`,interpretation:`Indications: It is now possible for you to see things as they really are. 
 The stage is set for a new beginning or a favorable completion. The 
 events in your life are in harmony with the universe.`,category:"major-arcana"}];function I(e){const n=Math.floor(Math.random()*e.length);return e[n]}function C(e,n){return!!n.find(t=>t===e)}function x(e){let n=[];for(;e>0;){const t=I(T);C(t,n)||(n.push(t),e--)}return n}function K(){const e=new Date,n=e.toDateString(),t=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return`${n}, ${t}`}const S=K();function E(){const e=Number(i(m)),n=x(e);n.forEach(a=>{W(a)});const t=document.getElementsByClassName("card");for(let a=0;a<t.length;a++){const o=t[a];o.style.opacity=0,setTimeout(()=>{o.style.opacity=1})}let r=i(u)||[];for(let a=0;a<n.length;a++){const o=n[a];o.timestamp=S,r.push(o)}b(u,r)}v();const y=document.getElementById("card-desc"),d=document.querySelector("#refreshButton"),l=document.getElementById("click-text"),p=i(m);p==="1"?l.textContent="click the deck below to draw a card":p==="3"&&(l.textContent="click the deck below to draw your cards");setTimeout(()=>{l.classList.add("fade-in")},100);k();const f=e=>{E(),w.removeEventListener("click",f),e.target.classList.remove("top");const n=i(m);n==="1"?y.textContent="click card below to reveal interpretation":n==="3"&&(y.textContent="click each card below to reveal your past, present, and future interpretation"),d.style.visibility="visible",d.scrollIntoView({behavior:"smooth"});const t=document.querySelector("#audio-one");t.volume=.1,t.play()},w=document.querySelector(".card-img.top");w.addEventListener("click",f);d.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{window.location.reload()},300)});
