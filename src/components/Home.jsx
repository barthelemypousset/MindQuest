import mainScreen from '../../assets/main.png';

export function Home() {
return (
<div className="flex justify-center items-center h-full">
<img
src={mainScreen}
alt="Progression Map"
className="object-contain h-full"
/>
</div>
);
}
