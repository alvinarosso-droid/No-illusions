
import React from 'react';
import { 
  CheckCircle, 
  MessageSquare, 
  Zap, 
  BatteryLow, 
  Activity, 
  CloudRain, 
  ShieldAlert, 
  Compass, 
  Sparkles,
  ArrowRight,
  Brain,
  Timer
} from 'lucide-react';

export const Slide1: React.FC = () => (
  <div className="flex flex-col h-full justify-center items-center text-center space-y-12">
    <div className="space-y-4">
      <p className="text-xl tracking-widest opacity-80 uppercase">Честный разговор с собой</p>
      <div className="w-48 h-px bg-slide-font/30 mx-auto"></div>
    </div>
    
    <div className="space-y-6">
      <h1 className="text-6xl font-bold leading-tight uppercase max-w-5xl tracking-tight">
        Жизнь в голове как<br /><span className="text-accent-teal">утечка энергии</span>
      </h1>
      <p className="text-2xl max-w-3xl mx-auto opacity-80">
        Есть особый тип внутреннего истощения, который почти не осознаётся — когда вы проживаете больше жизни в фантазиях, чем в реальности.
      </p>
    </div>

    <div className="grid grid-cols-3 gap-6 w-full max-w-5xl">
      {[
        { icon: <MessageSquare size={24} />, text: "Сценарии и диалоги" },
        { icon: <Timer size={24} />, text: "Фантазийные будущие" },
        { icon: <Activity size={24} />, text: "Реакции на то, чего нет" }
      ].map((item, i) => (
        <div key={i} className="bg-accent-dark/20 backdrop-blur-md border border-slide-font/10 p-6 rounded-2xl flex flex-col items-center gap-3">
          <div className="text-accent-teal">{item.icon}</div>
          <p className="text-lg font-bold">{item.text}</p>
        </div>
      ))}
    </div>

    <div className="absolute bottom-12 text-sm opacity-60 italic">
      Психика принимает это за реальность: энергия тратится на то, что никогда не случится.
    </div>
  </div>
);

export const Slide2: React.FC = () => (
  <div className="h-full flex flex-col">
    <div className="mb-10 text-center">
      <h2 className="text-4xl font-bold uppercase tracking-widest">2. Эмоциональное проживание</h2>
      <p className="text-xl opacity-70 mt-2">Вместо реального действия</p>
    </div>
    
    <div className="flex-1 grid grid-cols-2 gap-12">
      <div className="bg-accent-dark/40 rounded-3xl p-10 border border-white/5 flex flex-col justify-center">
        <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Zap className="text-accent-teal" size={32} />
          Эмоция — импульс
        </h3>
        <p className="text-xl leading-relaxed opacity-90">
          Если действие не происходит, а эмоция остаётся внутри, она застревает. 
          Когда вы много чувствуете и анализируете, но не делаете телесного шага — энергия замыкается.
        </p>
      </div>

      <div className="space-y-6 flex flex-col justify-center">
        <div className="bg-slide-font/5 rounded-3xl p-8 border border-white/10">
           <h4 className="text-2xl font-bold text-accent-teal mb-4 uppercase">Это создаёт:</h4>
           <ul className="space-y-4">
             {[
               "Хроническую усталость",
               "Ощущение «я и так уже много сделала»",
               "Иллюзию движения без результата"
             ].map((item, i) => (
               <li key={i} className="flex items-center gap-4 text-xl">
                 <CheckCircle className="text-accent-teal shrink-0" size={24} />
                 <span>{item}</span>
               </li>
             ))}
           </ul>
        </div>
        <div className="bg-accent-red/20 p-6 rounded-2xl border-l-4 border-accent-red">
          <p className="italic">Энергия не реализуется, а превращается во внутреннее напряжение.</p>
        </div>
      </div>
    </div>
  </div>
);

export const Slide3: React.FC = () => (
  <div className="h-full flex flex-col">
    <div className="mb-12">
      <h2 className="text-5xl font-bold uppercase border-b-2 border-accent-dark inline-block pb-2">3. Сдерживание эмоций</h2>
      <p className="text-xl opacity-70 mt-2">Скрытый и самый дорогой расход ресурсов</p>
    </div>

    <div className="flex-1 grid grid-cols-12 gap-10">
      <div className="col-span-5 bg-slide-font/5 rounded-3xl p-10 border border-white/10 relative overflow-hidden flex flex-col justify-center">
        <Brain className="absolute top-4 right-4 text-slide-font/5" size={140} />
        <h3 className="text-2xl font-bold mb-6 relative z-10">Психика тратит колоссальные силы на то, чтобы вы ничего не чувствовали.</h3>
        <p className="text-lg opacity-80 relative z-10">
          Когда нет контакта с собой: вы не замечаете злость, не осознаёте страх, не видите напряжения.
        </p>
      </div>

      <div className="col-span-7 flex flex-col justify-center space-y-8">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-accent-dark/30 p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-4">
             <BatteryLow size={40} className="text-accent-red" />
             <p className="font-bold uppercase tracking-tighter">Фон усталости и апатии</p>
          </div>
          <div className="bg-accent-dark/30 p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-4">
             <CloudRain size={40} className="text-accent-teal" />
             <p className="font-bold uppercase tracking-tighter">Ощущение тяжести жизни</p>
          </div>
        </div>
        
        <div className="bg-accent-dark/60 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
          <ShieldAlert className="text-accent-red shrink-0" size={28} />
          <p className="text-xl">
            Тело держит всё, что не прожито головой. Сдерживание — это постоянный «фоновый процесс», съедающий весь заряд.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const Slide4: React.FC = () => (
  <div className="h-full flex flex-col">
    <div className="mb-10">
      <h2 className="text-5xl font-bold uppercase tracking-wide">4. Ловушка духовного образа</h2>
      <p className="text-xl opacity-70 mt-2">Убежище от реальности вместо пути в неё</p>
    </div>

    <div className="flex-1 grid grid-cols-12 gap-8">
      <div className="col-span-6 space-y-6 flex flex-col justify-center">
        <div className="bg-accent-dark/50 rounded-3xl p-8 border border-white/5 relative overflow-hidden">
          <Sparkles className="absolute -top-4 -right-4 text-accent-teal/10" size={150} />
          <h4 className="text-2xl font-bold text-accent-teal uppercase mb-6">Образ «Осознанной»:</h4>
          <div className="grid grid-cols-2 gap-4 text-lg">
            <div className="bg-white/5 p-4 rounded-xl">«Я глубокая»</div>
            <div className="bg-white/5 p-4 rounded-xl">«Я не про деньги»</div>
            <div className="bg-white/5 p-4 rounded-xl">«Я выше этого»</div>
            <div className="bg-white/5 p-4 rounded-xl">«Я в потоке»</div>
          </div>
        </div>
        <p className="text-xl italic opacity-80">
          Вы движетесь к образу в голове, пока реальные навыки остаются неразвитыми.
        </p>
      </div>

      <div className="col-span-6 bg-slide-font/5 rounded-3xl p-10 border border-white/10 flex flex-col justify-center gap-8">
        <div>
          <h4 className="text-xl font-bold uppercase mb-4 text-accent-red">Что остается в тени:</h4>
          <ul className="space-y-3 opacity-90">
            <li className="flex items-center gap-2">
              <ArrowRight size={18} className="text-accent-red" />
              <span>Способность зарабатывать</span>
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight size={18} className="text-accent-red" />
              <span>Умение структурировать</span>
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight size={18} className="text-accent-red" />
              <span>Выносливость к рутине</span>
            </li>
          </ul>
        </div>

        <div className="bg-accent-teal text-accent-dark p-6 rounded-2xl flex items-center gap-4">
           <Compass size={32} />
           <div>
             <h5 className="font-bold uppercase">Момент истины:</h5>
             <p className="text-sm">«Я будто только вышла из садика». Это не деградация, а начало реального пути.</p>
           </div>
        </div>
      </div>
    </div>
  </div>
);
