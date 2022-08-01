<?php

namespace App\Http\Controllers;

use App\Http\Resources\InterviewResource;
use Illuminate\Http\Request;
use App\Models\Interview;

class InterviewController extends Controller
{
    public function setSlots(Request $request) {
        $user = $request->user();

        Interview::where('user_id', $user->id)->delete();

        foreach ($request->all() as $r) {
            Interview::create([
                'time' => $r['time'],
                'day' => $r['day'],
                'user_id' => $user->id
            ]);
        }

        return response()->json($request);
    }

    public function viewSlots($id) {
        return InterviewResource::collection(Interview::where('user_id', $id)->get());
    }

    public function selectSlots($id, Request $request) {
        Interview::where('user_id', $id)
                    ->whereIn('time', collect($request->all())->pluck('time'))
                    ->whereIn('day', collect($request->all())->pluck('day'))
                    ->update(['selected' => true]);

        return response()->json([
            'message' => 'selected with success'
        ]);
    }
}
