import { GiWaterDrop } from 'react-icons/gi'
import Tooltip from './Tooltip'

export default function IconAnimations() {
	return (
		<section className="component">
			<h2 className="component-title">Animated Icons with tooltips</h2>
			<div className="flex flex-row relative">
				<Tooltip content="Spotify style playing animation">
					<div className="border border-content rounded-lg w-16 h-14 px-1 py-0 pt-2 flex flex-row m-4 bg-slate-900">
						<div className="w-2 bg-lime-500 animate-[playing_1.2s_ease-in-out_infinite] origin-bottom m-0.5"></div>
						<div className="w-2 bg-lime-500 animate-[playing2_1.2s_ease-in-out_infinite] origin-bottom m-0.5"></div>
						<div className="w-2 bg-lime-500 animate-[playing3_1.2s_ease-in-out_infinite] origin-bottom m-0.5"></div>
						<div className="w-2 bg-lime-500 animate-[playing4_1.2s_ease-in-out_infinite] origin-bottom m-0.5"></div>
						<div className="w-2 bg-lime-500 animate-[playing5_1.2s_ease-in-out_infinite] origin-bottom m-0.5"></div>
					</div>
				</Tooltip>
				<Tooltip content="Discord style loading animation">
					<div className="border border-content rounded-lg w-16 h-14 px-2 py-2 flex flex-row m-4 bg-slate-900 relative">
						<div className="w-4 h-4 bg-emerald-500 animate-[cycle1_3s_infinite] absolute"></div>
						<div className="w-4 h-4 bg-emerald-500 animate-[cycle2_3s_infinite] absolute  bottom-2 right-2"></div>
					</div>
				</Tooltip>
				<Tooltip content="Twich redeem points type animation">
					<div className="border border-content rounded-lg w-16 h-14 px-3 py-2 flex flex-col gap-0 m-4 bg-purple-500 relative">
						<div className="animate-[wiggle_500ms_ease-in-out_infinite]">
							<div className="w-10 h-8 -mb-[17px] clip-box-outer bg-black"></div>
							<div className="w-[34px] h-[22px] clip-box-inner absolute bg-purple-500 top-[4px] left-[3px]"></div>
							<div className="border-[3px] rounded-b-md border-black w-10 h-6 justify-center flex mt-0">
								<div className="border-[3px] border-black w-3 h-3 justify-center -mt-[1px]"></div>
							</div>
						</div>
					</div>
				</Tooltip>
				<Tooltip content="water drop ripple type animation">
					<div className="border border-content rounded-lg w-16 h-14 px-2 py-2 flex flex-row m-4 bg-slate-900 relative items-center overflow-hidden">
						<GiWaterDrop className="text-teal-500 text-2xl mx-auto -mt-8 animate-[drip_3s_infinite]" />
						<div className="animate-[ripple_3s_infinite] rounded-full w-4 h-4 border-2 border-blue-400 absolute left-[23px] top-[30px]"></div>
					</div>
				</Tooltip>
				<div className="border border-content rounded-lg w-16 h-14 px-2 py-2 flex flex-row m-4 bg-slate-900 relative">
					<div></div>
				</div>
				<div className="border border-content rounded-lg w-16 h-14 px-2 py-2 flex flex-row m-4 bg-slate-900 relative">
					multi spinner
				</div>

				<div className="border border-content rounded-lg w-16 h-14 px-2 py-2 flex flex-row m-4 bg-slate-900 relative">
					One Plus spinning dots
				</div>
			</div>
		</section>
	)
}
