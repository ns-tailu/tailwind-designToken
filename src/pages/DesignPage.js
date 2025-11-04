import React from 'react';
import Chip from '../components/chip-mcp/Chip';

function CardSection() {
    return (
        <div className="bg-neutral-bg-base shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_10px_10px_0px_rgba(0,0,0,0.04)] p-8 w-full box-border">
            <div className="h-8 flex items-center w-full">
                <h2 className="text-[24px] leading-8 font-light">Test design page</h2>
            </div>
            <div className="flex gap-8 mt-4">
                <div className="flex flex-col gap-2 items-start">
                    <div className="text-[14px] leading-5 font-bold text-neutral-text-weak">Status of design</div>
                    <Chip content="ongoing" interactive sentiment="neutral" />
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <div className="text-[14px] leading-5 font-bold text-neutral-text-weak">Status of implementation</div>
                    <Chip content="Completed" interactive sentiment="action" />
                </div>
            </div>
        </div>
    );
}

export default function DesignPage() {
    return (
        <div className="bg-neutral-bg-subtle min-h-screen w-screen box-border shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]">
            <div className="bg-[#103B5C] bg-opacity-95 h-14 w-full flex items-center justify-between px-8">
                <div className="text-neutral-text-inverse text-[18px]">netskope</div>
                <div className="flex items-center gap-4 text-neutral-text-inverse text-[12px]">
                    <span>🔍</span>
                    <span>🔔</span>
                    <span>👤</span>
                    <span>❓</span>
                </div>
            </div>
            <div className="p-8 flex flex-col gap-8">
                <CardSection />
                <CardSection />
                <CardSection />
                <CardSection />
            </div>
        </div>
    );
}


